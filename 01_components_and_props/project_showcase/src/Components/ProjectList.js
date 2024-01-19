import ProjectListItem from "./ProjectListItem"; // import the ProjectListItem component

function ProjectList({projects}){
    console.log(projects) // Accept the prop and LOG it to the console
    

    // Map over the projects array to render the ProjectListItem component for ea element. Don't forget to provide a key prop set to the project id value & provide ea project obj as a prop named "project".  
    const projectListItems = projects.map((project) => (
        console.log(project),
        <ProjectListItem key={project.id} project={project}/> // This is where we render each index to ProjectListItem, so it builds out the cards for us. Becuz ea is unique, we need to give it a unique ID. 
    ));

    return (
        <section> {/* This is where we build our wireframe */}
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>
            {/* This is where we build out our search bar next to our <section> */}
            <input type="text" placeholder="Search..."></input>
            <ul className="cards">{projectListItems}</ul> {/* This is where we render our projectListItems interpolates our JSX code into HTML */}
        </section>
    )
}

export default ProjectList;

// import ProjectListItem from "./ProjectListItem";
// function ProjectList({projects}){
//     console.log(projects)
//     const projectListItems = projects.map((project) => (

//         <ProjectListItem key={project.id} project ={project}/>
//     ));
//     return (
//         <section>
//             <div className ="filter">
//                 <button>All</button>    

//         console.log(project),
//         <ProjectListItem key={project.id} project={project}/>        
//     ));
//     return (
//         <section>
//             <div className="filter">
//                 <button>All</button>

//                 <button>Phase 5</button>
//                 <button>Phase 4</button>
//                 <button>Phase 3</button>
//                 <button>Phase 2</button>
//                 <button>Phase 1</button>
//             </div>
//             <input type="text" placeholder="Search..."></input>

//             <ul className ="cards">{projectListItems}</ul>

//         </section>
//     )
// }
// export default ProjectList
