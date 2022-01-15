import React, {Component} from 'react';
import Card from './Card/Card'
import styles from './Cards.module.css'

const Cards = (props) => {
    return (
        <div className={styles.container}>
            <Card 
                text="Infected"
                value={props.confirmed_value}
                date={props.lastUpdate}
                info="Number of active cases from COVID-19"
                className={styles.infected}
            />
            <Card 
                text="Recovered"
                value={props.recovered_value}
                date={props.lastUpdate}
                info="Number of recoveries from COVID-19"
                className={styles.recovered}
            />    
            <Card 
                text="Deaths"
                value={props.deaths_value}
                date={props.lastUpdate}
                info="Number of deaths from COVID-19"
                className={styles.deaths}
            />
        </div>
    )
}

 
export default Cards;