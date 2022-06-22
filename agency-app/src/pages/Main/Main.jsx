import React, { useContext, useState } from "react";
import { StateContext } from "../../context/context";
import st from './Main.module.css';
import TitleSection from "./TitleSection";


function Main() {
    const state = useContext(StateContext);
    const [filtered, setFiltered] = useState(state);
    
    function filteredPortfolio(tag) {
        if (tag === 'all') {
            setFiltered(state)
        } 
        else {
            let newPortfolio = state.filter(item => item.tag === tag)
            setFiltered(newPortfolio)
        }
    }

    return (
        <div>
            <TitleSection />
            <div className={st.filter_menu}>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('all')}>
                    Show All</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('design')}>
                    Design</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('branding')}>
                    Branding</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('illustration')}>
                    Illustration</button>
                <button className={st.filter_item} 
                onClick={() => filteredPortfolio('motion')}>
                    Motion</button>
            </div>
            <div className={st.wrap}>
                {filtered.map((item) => 
                    <div key={item.id} className={st.card}>
                        <img src={item.src}></img>
                        <div className={st.position}>
                            <button className={st.filter} onClick={() => filteredPortfolio(item.tag)}>{item.tag}</button>
                            <div className={st.name}>{item.name}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;