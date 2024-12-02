import React from 'react'
import styles from './Sobre.module.css'
import avatar from './images/meu avatar.png'
import js from './images/icon-js.svg'
import nest from './images/Nest.js.svg'
import java from './images/java_original_logo_icon_146458.svg'
import ts from './images/typescript_original_logo_icon_146317.svg'
import mongo from './images/mongodb_plain_wordmark_logo_icon_146423.svg'
import pg from './images/postgresql_original_wordmark_logo_icon_146392.svg'
function Sobre(){
    return(
            <section className={styles.sobre}>

                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                    <div className={styles.textos}>
                        <h2>Sobre mim</h2>

                       <p> Sou <span>Elias Pereira</span> <br />
                        <strong>Dev Front End</strong> </p>

                       <p>Trabalho com desenvolvimento Front-end desde 2022 e estou me especializando na área.</p> 

                       <p>Amo transformar aquilo que está no imaginário ou nas ideias em algo real.</p>  

                       <p>Especializado em desenvolver interfaces atrativas e funcionais, combinando design e tecnologia para criar experiências digitais envolventes,
                         com foco no impacto visual e na conversão do usuário.</p> 

                    </div>
                </div>

                <div className={styles.techs}>
                    <h3>Techs</h3>
                   <div className={styles.icones}>
                        <img src={js} alt="icone" /> 
                        <img src={java} alt="icone" /> 
                        <img src={pg} alt="icone" /> 
                   </div>
                </div>

            </section>
    )
}

export default Sobre;