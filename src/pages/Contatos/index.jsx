import React from 'react'
import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

function Contatos(){
    return(
        <>
            <section className={styles.contatos}> 
                <h2>Contatos:</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>
                    <a href="mailto:elias.pereira.adm@outlook.com" target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} /> 
                    </a>
                    <a href="https://www.instagram.com/eliaspeereira" target='_blank' rel='noopener noreferrer'>
                    <BsInstagram className={styles.icone} /> 
                    </a>
                    <a href="https://github.com/eliasjunniior" target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                    </a>
                    <a href="https://www.linkedin.com/in/elias-pereira-350519184/" target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin  className={styles.icone} />
                    </a>

                </div>
            </section>
        </>
    )
}

export default Contatos;