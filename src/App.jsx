import './App.css'
import IntroPage from './Pages/IntroPage/IntroPage';
import StackPage from './Pages/StackPage/StackPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  

  return (
    <div className="App">
      <IntroPage></IntroPage>
      <StackPage></StackPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </div>
  )
}

export default App
