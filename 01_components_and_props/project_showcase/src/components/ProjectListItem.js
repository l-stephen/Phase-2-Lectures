
function ProjectListItem(){
    return (
    <li className="card">
        <figure className="image">
            <img></img>
            <button className="claps">👏{0}</button>
        </figure>

        <article className="details">
            <h4></h4>
            <p></p>
            {
                true ? 
                    <p>
                        <a>Link</a>
                    </p>
                 : null
            }
        </article>

        <footer className="extra">
            <span className="badge blue">Phase </span>

        </footer>

    </li>
    )

}
export default ProjectListItem