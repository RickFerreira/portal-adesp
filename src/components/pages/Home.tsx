import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home_container}>

      <h1>
        Bem-vindo(a) ao <span>ADESP</span>
      </h1>
      <p>Aqui você vai encontrar um acervo criado por estudantes, para facilitar sua vida no curso de Análise e Desenvolvimento de Sistemas do IFPB Campus Esperança!!</p>
    </section>
  )
}
export default Home