import './App.css'
import { BrowserRouter as Router} from "react-router-dom";

import IntroPage from './Pages/IntroPage/IntroPage';
import StackPage from './Pages/StackPage/StackPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ContactPage from './Pages/ContactPage/ContactPage';

import useLocalStorage from "use-local-storage";
import { useEffect } from 'react';


function App() {

  const [theme, setTheme] = useLocalStorage('theme' , 'dark');
  
  const changeTheme = (themeName) =>{ 
    console.log(themeName);
    setTheme(themeName)
  }

  // useEffect(() => {
    
  // })

  return (
    <div className='App' data-theme={theme}>
      <Router>
        <IntroPage changeTheme={changeTheme}/>
        <StackPage></StackPage>
        <ProjectsPage></ProjectsPage>
        <ContactPage></ContactPage>
      </Router>
    </div>
  );
}

export default App
