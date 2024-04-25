import projects from "./projects"
import Header from "./components/Header"
import ProjectForm from "./Components/ProjectForm"
import ProjectList from "./Components/ProjectList"
function App() {
  return (
  <div className="App">
    <Header />
    <ProjectForm />
    <ProjectList projects = {projects}/>
   </div>
  );
}

export default App;
