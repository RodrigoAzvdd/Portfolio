import "../style/projectsStyle.css"
import ProjectsCards from "./sections/ProjectsCards";

function Projects() {
    return (
        <section className="projectContainer">
            <p className="message">
                &quot; Projetos &quot;
            </p>
            <ProjectsCards />
        </section>
    );
}

export default Projects;