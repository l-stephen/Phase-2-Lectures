
import Header from "./Components/Header";
import ProjectForm from "./Components/ProjectForm";
import ProjectList from "./Components/ProjectList";
import projects from "./projects";


function App() {
  return (
  <div className="App">
    <Header />
    <ProjectForm />
    <ProjectList projects = {projects}/> {/* This is where we defined our prop and are passing it to ProjectList, then we accept that data on Proejct List comp */}
  </div>
  )
}

export default App;