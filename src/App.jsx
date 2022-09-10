import './App.css'
import { BrowserRouter as Router} from "react-router-dom";

import IntroPage from './Pages/IntroPage/IntroPage';
import StackPage from './Pages/StackPage/StackPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  

  return (
    <div className='App'>
      <Router>
        <IntroPage />
        <StackPage></StackPage>
        <ProjectsPage></ProjectsPage>
        <ContactPage></ContactPage>
      </Router>
    </div>
  );
}

export default App
