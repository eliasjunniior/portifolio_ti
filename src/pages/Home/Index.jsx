import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const backendUrl = 'https://springcrest1-1.onrender.com/'; // Agora a URL é relativa, pois frontend e backend estão na mesma origem

  useEffect(() => {
    fetch(backendUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Esperamos um JSON
      })
      .then(data => {
        setImageUrl(data.message); // Extrai a URL da imagem do campo "message"
      })
      .catch(error => {
        console.error('Erro ao buscar informações do backend:', error);
        setImageUrl(''); // Limpa a URL em caso de erro
      });
  }, []);

  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, me chamo <br />
          <span>Elias Pereira</span> <br />
          Dev Front End
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Saiba mais sobre mim
        </Link>
      </div>
      <figure>
        <img className={styles.img_home} src="/dev.svg" alt="imagem de home" />
      </figure>

      <div className={styles.backend_info}>
        <h2>Imagem do Backend:</h2>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Imagem do Backend"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        ) : (
          <p>Carregando imagem...</p>
        )}
      </div>
    </section>
  );
}

export default Home;
