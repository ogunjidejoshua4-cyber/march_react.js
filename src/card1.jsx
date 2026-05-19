import style from "./card.module.css";

export const Card1 = () =>  {
    return(
        <div className={style.card}>
            <img src="https://sqi.edu.ng/wp-content/uploads/2026/02/IMG-20250712-WA0024-400x250.jpg" alt="" />
            <h3>SQI College of ICT Partners with Ladoke Akintola University of Technology LAUTECH</h3>
            <div>Feb 13, 2026</div>
            <p>SQI College of ICT is pleased to formally announce a strategic academic collaboration with Ladoke Akintola University of Technology (LAUTECH) for the support and coordination of selected LAUTECH Part-Time Degree Programmes.This collaboration will operate at: SQI...</p>
        </div>
    )
}