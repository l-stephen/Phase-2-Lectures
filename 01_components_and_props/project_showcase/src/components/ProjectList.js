import ProjectListItem from "./ProjectListItem"
function ProjectList({projects}){
    console.log(projects)
    // const projectListItems = projects.map((project) => {
    //     console.log(project)
    //     return <ProjectListItem key={project.id} project = {project} />
    // })

    return (
        <section>
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>
            <input type="text" placeholder="Search..."></input>
            <ul className="cards">{projects.map((project) => {
                return <ProjectListItem key = {project.id} name={project.name} about={project.about} phase={project.phase} link={project.link} image={project.image}/>
            })}</ul>
            {/* <ul className="cards">{projects.map((project) => (
                <ProjectListItem key = {project.id} project={project}/>
            ))}</ul> */}
        </section>
    )

}
export default ProjectList