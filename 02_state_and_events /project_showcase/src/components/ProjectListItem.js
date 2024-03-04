<<<<<<< HEAD
import React, {useState} from "react"; // D1. first thing you gotta do is import your hook/useState


function ProjectListItem({project}){
    const [clapCounts, setClapCounts] = useState(0)
    console.log(project)
=======
import React, {useState} from "react"
function ProjectListItem({project}){
  const [clapCounts, setClapCounts] = useState(0)
  console.log(project)
>>>>>>> 78e2b1c29ea179308715542c53fcccb9daf73b47

  function handleClaps(){
    console.log(clapCounts)
    setClapCounts(clapCounts + 1)
  }
<<<<<<< HEAD

=======
>>>>>>> 78e2b1c29ea179308715542c53fcccb9daf73b47
  return (
      <li className="card">
          <figure className="image">
              <img src={project.image} alt={project.name}></img>
<<<<<<< HEAD
=======
              {/* <button className="claps" onClick={()=> setClapCounts(clapCounts+1)}>👏{clapCounts}</button> */}
>>>>>>> 78e2b1c29ea179308715542c53fcccb9daf73b47
              <button className="claps" onClick={handleClaps}>👏{clapCounts}</button>
          </figure>

          <section className="details">
              <h4>{project.name}</h4>
              <p>{project.about}</p>
              {
                  project.link ?
                   <p>
                      <a href={project.link}>Link</a>
                  </p>
                  : null
              }
          </section>

          <footer className="extra">
              <span className="badge blue">Phase {project.phase}</span>
          </footer>


      </li>
  )
}

export default ProjectListItem;