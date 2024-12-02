import React from 'react'
import styles from './card.module.css'
import { FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";




function Card({ name, description, html_url }) {
  return (
    <section className={styles.card}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.card_footer}>
            <div className={styles.card_icones}>
            <FaNodeJs />
            <SiNestjs />
            <SiTypescript />
            <FaJava />
            </div>
            <a href={html_url} target='_blank' rel='noopenner norefferer' className={styles.botao}>
            <BsArrowRight />
            </a >
        </div>
    </section>
  )
}

export default Card
