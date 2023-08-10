import styles from './style.module.css'
import reactStock from '/src/imgs/projects/reactStock.png';
import spaceX from '/src/imgs/projects/SpaceX.png';
import obcLP from '/src/imgs/projects/obcLP.png';
import restCountry from '/src/imgs/projects/restCountry.png';
import coffeShop from '/src/imgs/projects/CoffeShop.png';
import rickAndMorty from '/src/imgs/projects/rickandmorty.png';

export default function ProjectsCards() {
    return (
        <section className={styles.container}>
            <h1 className={styles.mainTitle}>PROJETOS</h1>
            <div className={styles.cardOnLeft}>
                <img className={styles.imgCard} src={reactStock} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>React Stock</h3>
                    <p className={styles.cardDescrition}>O projeto <strong>ReactStock</strong> é uma plataforma de gerenciamento de estoque altamente interativa e eficiente, desenvolvida usando a tecnologia React. Projetado para simplificar a complexa tarefa de rastrear produtos e quantidades em estoque, o <strong>ReactStock</strong> oferece uma experiência de usuário intuitiva que permite aos usuários cadastrar, visualizar, atualizar e deletar informações de estoque com facilidade.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>CSS</span>
                        <span className={styles.tecName}>JS</span>
                        <span className={styles.tecName}>REACT</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/React-Stock/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/React-Stock' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.cardOnRight}>
                <img className={styles.imgCard} src={spaceX} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>SpaceX LandingPage</h3>
                    <p className={styles.cardDescrition}>O projeto <strong>SpaceX LandingPage</strong> é uma reinterpretação inspirada da página de lançamentos da SpaceX, desenvolvida com maestria utilizando HTML, CSS, JavaScript e Bootstrap. Essa página proporciona uma experiência envolvente aos usuários, sendo totalmente responsiva para se adaptar perfeitamente a diferentes dispositivos, enquanto explora o fascinante universo dos lançamentos espaciais.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>SASS</span>
                        <span className={styles.tecName}>BOOTSTRAP</span>
                        <span className={styles.tecName}>JS</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/LandingPage_SpaceX/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/LandingPage_SpaceX' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.cardOnLeft}>
                <img className={styles.imgCard} src={obcLP} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>OnebitCode LandingPage</h3>
                    <p className={styles.cardDescrition}>O projeto <strong>OnebitCode LandingPage</strong> é um formulário de registro de astronautas desenvolvido com HTML, CSS e Bootstrap, que combina funcionalidade e responsividade. Independentemente do dispositivo que você está usando, seja desktop, tablet ou smartphone, a página se adapta perfeitamente, garantindo uma experiência de usuário fluida enquanto os aspirantes a astronautas compartilham seus nomes e informações essenciais.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>CSS</span>
                        <span className={styles.tecName}>BOOTSTRAP</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/OBC_LandingPage/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/OBC_LandingPage' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.cardOnRight}>
                <img className={styles.imgCard} src={restCountry} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>Discovering the World</h3>
                    <p className={styles.cardDescrition}><strong>Discovering the World</strong> é uma plataforma interativa desenvolvida com HTML, CSS e JavaScript, que se integra à API RestCountries. Ao inserir o nome de um país, os usuários podem acessar informações essenciais por meio da requisição à API. Com uma interface intuitiva e atraente, essa aplicação proporciona uma experiência envolvente, permitindo a exploração de dados de diferentes nações ao redor do globo.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>CSS</span>
                        <span className={styles.tecName}>JS</span>
                        <span className={styles.tecName}>RestCountries API</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/RestCountries-API/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/RestCountries-API' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.cardOnLeft}>
                <img className={styles.imgCard} src={coffeShop} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>CoffeeShop Page</h3>
                    <p className={styles.cardDescrition}><strong>CoffeeShop</strong> é uma página de site responsivo inspirada na primeira página da Starbucks. Desenvolvida como um exercício de frontend, a CoffeeShop Page foi criada utilizando HTML, CSS e conceitos de design. O objetivo era capturar a essência acolhedora de uma cafeteria virtual, proporcionando uma experiência visualmente agradável em diversos dispositivos, desde desktops até smartphones. Embora não possua funcionalidades avançadas, o foco do projeto está no design envolvente e na responsividade.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>SASS</span>
                        <span className={styles.tecName}>JS</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/CoffeeShop-FirstPage/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/CoffeeShop-FirstPage' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.cardOnLeft}>
                <img className={styles.imgCard} src={rickAndMorty} alt="" />
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>Rick and Morty Explorer</h3>
                    <p className={styles.cardDescrition}>O projeto <strong>Rick and Morty Explorer</strong> é uma plataforma de exploração dos personagens do universo de &quot;Rick and Morty&quot;, desenvolvida com HTML, CSS, JavaScript e React. Combinando funcionalidade e interatividade, os entusiastas da série podem buscar seus personagens favoritos por nome ou espécie. Não importa se você está acessando pelo computador, tablet ou smartphone, a aplicação oferece uma experiência perfeitamente adaptada, garantindo uma jornada suave e imersiva enquanto os fãs exploram os detalhes e curiosidades dos personagens dessa incrível saga animada.</p>
                    <div className={styles.tecDiv}>
                        <span className={styles.tecName}>HTML</span>
                        <span className={styles.tecName}>CSS</span>
                        <span className={styles.tecName}>JS</span>
                        <span className={styles.tecName}>REACT</span>
                    </div>
                    <div className={styles.viewOptions}>
                        <a href='https://rodrigoazvdd.github.io/Rick-and-Morty/' target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                        <a href='https://github.com/RodrigoAzvdd/Rick-and-Morty' target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}