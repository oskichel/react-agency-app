import React from "react";
import st from './Portfolio.module.css';

function Portfolio() {


    return (
        <div className={st.color}>
            <section className={st.section}>
                <h1 className={st.title}>Portfolio</h1>
                <p className={st.text}>Agency provides a full service range including technical skills, design, business understanding.</p>
            </section>
        </div>
    );
}

export default Portfolio;