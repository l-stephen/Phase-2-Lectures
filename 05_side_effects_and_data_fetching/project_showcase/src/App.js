import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const handleUnmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  console.log("Rendering App Component!")

  useEffect(() => {
    console.log("Running the use effect hook!")
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((proj) => setProjects(proj))

    return () => {
      console.log("Cleanup function executed!")
    }
  }, [])

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

  // function onToggleDarkMode(){
  //   setIsDarkMode(!isDarkMode)
  // }

  function handleSearch(newsearch){
    setSearchQuery(newsearch)
  }

  // const handleSearch = (newvalue) => setSearchQuery(newvalue)

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }
  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
      <ProjectForm onAddProject = {onAddProject}/>
      <button onClick={handleUnmount}>Unmount</button>
      <ProjectList searchQuery = {searchQuery} projects={projects} handleSearch={handleSearch} setProjects = {setProjects}/>
    </div>
  );
};

export default App;