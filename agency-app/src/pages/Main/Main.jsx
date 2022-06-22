import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../components/MyButton/MyButton";
import { StateContext } from "../../context/context";
import st from './Main.module.css';
import TitleSection from "./TitleSection";


function Main() {
    const state = useContext(StateContext);
    const [filtered, setFiltered] = useState(state);
    const [visible, setVisible] = useState(9);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 9);
    };
    
    function filteredPortfolio(tag) {
        if (tag === 'all') {
            setFiltered(state)
        } 
        else {
            let newPortfolio = state.filter(item => item.tag === tag)
            setFiltered(newPortfolio)
        }
    }

    const removeItem = (id) => {
        setFiltered(filtered.filter(item => item.id !== id))
    };

    const handleDeleteKey = (e) => {
        if (e.key === 'Delete') removeItem();
    };

    return (
        <div>
            <TitleSection />
            <div className={st.filter_menu}>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('all')}>
                    Show All</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('Design')}>
                    Design</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('Branding')}>
                    Branding</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('Illustration')}>
                    Illustration</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('Motion')}>
                    Motion</button>
            </div>
            <select className={st.select_menu}>
                <option className={st.select_item}
                onClick={() => filteredPortfolio('all')}>Show All</option>
                <option className={st.select_item}
                onClick={() => filteredPortfolio('Design')}>Design</option>
                <option className={st.select_item}
                onClick={() => filteredPortfolio('Branding')}>Branding</option>
                <option className={st.select_item}
                onClick={() => filteredPortfolio('Illustration')}>Illustration</option>
                <option className={st.select_item}
                onClick={() => filteredPortfolio('Motion')}>Motion</option>
            </select>
            <div className={st.wrap}>
                {filtered.slice(0, visible).map((item) => 
                    <div key={item.id} className={st.card} onKeyDown={(e) => handleDeleteKey}>
                        <img src={item.src} alt='portfolio'></img>
                        <div className={st.position}>
                            <button className={st.filter} onClick={() => filteredPortfolio(item.tag)}>{item.tag}</button>
                            <div className={st.name}>{item.name}</div>
                        </div>
                    </div>
                )}
            </div>
            <MyButton className={st.loader} onClick={showMoreItems}>LOAD MORE</MyButton>
        </div>
    );
}

export default Main;