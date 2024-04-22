import projects from "./projects"
import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
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
