import styles from './style.module.css'
import reactStock from '/src/imgs/projects/reactStock.png';
import spaceX from '/src/imgs/projects/SpaceX.png';
import obcLP from '/src/imgs/projects/obcLP.png';
import restCountry from '/src/imgs/projects/restCountry.png';
import coffeShop from '/src/imgs/projects/CoffeShop.png';
import rickAndMorty from '/src/imgs/projects/rickandmorty.png';
import ProjectCard from '../../../components/ProjectCard';
import Newsletter from '/src/imgs/projects/Newsletter.png'

export default function ProjectsCards() {
    return (
        <section className={styles.container}>
            <h1 className={styles.mainTitle}>PROJETOS</h1>
            <ProjectCard
                title={"React Stock"}
                description={"O projeto ReactStock é uma plataforma de gerenciamento de estoque altamente interativa e eficiente, desenvolvida usando a tecnologia React. Projetado para simplificar a complexa tarefa de rastrear produtos e quantidades em estoque, o ReactStock oferece uma experiência de usuário intuitiva que permite aos usuários cadastrar, visualizar, atualizar e deletar informações de estoque com facilidade."}
                img={reactStock}
                position={'left'}
                code={'https://github.com/RodrigoAzvdd/React-Stock'}
                url={'https://rodrigoazvdd.github.io/React-Stock/'}
                tec={["HTML", "CSS", "Javascript", "REACT"]}
            />
            <ProjectCard
                title={"Newsletter NextJS"}
                description={"O projeto INSIGHTS é uma aplicação web desenvolvida com tecnologias modernas, incluindo Next.js, TypeScript e Tailwind CSS. Ele oferece aos usuários a oportunidade de se manterem atualizados com as últimas notícias, permitindo o cadastro de seus endereços de e-mail para receber informações relevantes. O banco de dados MySQL utilizado para armazenar os endereços de e-mail é hospedado na plataforma Railway."}
                img={Newsletter}
                position={'left'}
                code={'https://github.com/RodrigoAzvdd/Newsletter-NextJS'}
                url={'https://newsletter-next-js.vercel.app'}
                tec={["NextJS", "Typescript", "TailwindCSS", "MySQL"]}
            />
            <ProjectCard
                title={"Rick and Morty Explorer"}
                description={"O projeto Rick and Morty Explorer é uma plataforma de exploração dos personagens do universo de Rick and Morty, desenvolvida com HTML, CSS, JavaScript e React. Combinando funcionalidade e interatividade, os entusiastas da série podem buscar seus personagens favoritos por nome ou espécie. Não importa se você está acessando pelo computador, tablet ou smartphone, a aplicação oferece uma experiência perfeitamente adaptada, garantindo uma jornada suave e imersiva enquanto os fãs exploram os detalhes e curiosidades dos personagens dessa incrível saga animada."}
                img={rickAndMorty}
                position={'right'}
                code={'https://github.com/RodrigoAzvdd/Rick-and-Morty'}
                url={'https://rodrigoazvdd.github.io/Rick-and-Morty/'}
                tec={["HTML", "CSS", "Javascript", "REACT"]}
            />
            <ProjectCard
                title={"SpaceX LandingPage"}
                description={"O projeto SpaceX LandingPage é uma reinterpretação inspirada da página de lançamentos da SpaceX, desenvolvida com maestria utilizando HTML, CSS, JavaScript e Bootstrap. Essa página proporciona uma experiência envolvente aos usuários, sendo totalmente responsiva para se adaptar perfeitamente a diferentes dispositivos, enquanto explora o fascinante universo dos lançamentos espaciais."}
                img={spaceX}
                position={'right'}
                code={'https://github.com/RodrigoAzvdd/LandingPage_SpaceX'}
                url={'https://rodrigoazvdd.github.io/LandingPage_SpaceX/'}
                tec={["HTML", "SASS", "Javascript", "BOOTSTRAP"]}
            />
            <ProjectCard
                title={"OnebitCode LandingPage"}
                description={"O projeto OnebitCode LandingPage é um formulário de registro de astronautas desenvolvido com HTML, CSS e Bootstrap, que combina funcionalidade e responsividade. Independentemente do dispositivo que você está usando, seja desktop, tablet ou smartphone, a página se adapta perfeitamente, garantindo uma experiência de usuário fluida enquanto os aspirantes a astronautas compartilham seus nomes e informações essenciais."}
                img={obcLP}
                position={'left'}
                code={'https://github.com/RodrigoAzvdd/OBC_LandingPage'}
                url={'https://rodrigoazvdd.github.io/OBC_LandingPage/'}
                tec={["HTML", "CSS", "BOOTSTRAP"]}
            />
            <ProjectCard
                title={"Discovering the World"}
                description={"Discovering the World é uma plataforma interativa desenvolvida com HTML, CSS e JavaScript, que se integra à API RestCountries. Ao inserir o nome de um país, os usuários podem acessar informações essenciais por meio da requisição à API. Com uma interface intuitiva e atraente, essa aplicação proporciona uma experiência envolvente, permitindo a exploração de dados de diferentes nações ao redor do globo."}
                img={restCountry}
                position={'right'}
                code={'https://github.com/RodrigoAzvdd/RestCountries-API'}
                url={'https://rodrigoazvdd.github.io/RestCountries-API/'}
                tec={["HTML", "CSS", "Javascript", "RestCountries API"]}
            />
            <ProjectCard
                title={"CoffeeShop Page"}
                description={"CoffeeShop é uma página de site responsivo inspirada na primeira página da Starbucks. Desenvolvida como um exercício de frontend, a CoffeeShop Page foi criada utilizando HTML, CSS e conceitos de design. O objetivo era capturar a essência acolhedora de uma cafeteria virtual, proporcionando uma experiência visualmente agradável em diversos dispositivos, desde desktops até smartphones. Embora não possua funcionalidades avançadas, o foco do projeto está no design envolvente e na responsividade."}
                img={coffeShop}
                position={'left'}
                code={'https://github.com/RodrigoAzvdd/CoffeeShop-FirstPage'}
                url={'https://rodrigoazvdd.github.io/CoffeeShop-FirstPage/'}
                tec={["HTML", "SASS", "Javascript"]}
            />
        </section>
    )
}