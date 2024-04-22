
function ProjectListItem({name, about, image, link, phase}){
    console.log(name)
    console.log(image)
    console.log(about)
    console.log(link)
    console.log(phase)
    return (
    <li className="card">
        <figure className="image">
            <img src={image}></img>
            <button className="claps">👏{0}</button>
        </figure>

        <article className="details">
            <h4>{name}</h4>
            <p>{about}</p>
            {
                link ? 
                    <p>
                        <a href={link}>Link</a>
                    </p>
                 : null
            }
        </article>

        <footer className="extra">
            <span className="badge blue">Phase {phase} </span>

        </footer>

    </li>
    )

}
export default ProjectListItem