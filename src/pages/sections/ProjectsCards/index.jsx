import styles from './style.module.css'
import reactStock from '/src/imgs/projects/reactStock.png';

export default function ProjectsCards() {
    return (
        <section className={styles.container}>
            <div className={styles.cardOnLeft}>
                <img className={styles.imgCard} src={reactStock} alt="" />
                <div className={styles.info}>
                    <h3>React Stock</h3>
                    <p>O projeto "ReactStock" é uma plataforma de gerenciamento de estoque altamente interativa e eficiente, desenvolvida usando a tecnologia React. Projetado para simplificar a complexa tarefa de rastrear produtos e quantidades em estoque, o "ReactStock" oferece uma experiência de usuário intuitiva que permite aos usuários cadastrar, visualizar, atualizar e deletar informações de estoque com facilidade.</p>
                    <div>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>REACT</span>
                    </div>
                </div>
            </div>
            <div className={styles.cardOnRight}></div>
        </section>
    )
}