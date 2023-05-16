import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import HomeScreen from './screens/HomeScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import ProjectDetailsScreen from './screens/ProjectDetailsScreen'
// import AboutScreen from './screens/AboutScreen'
// import ServicesScreen from './screens/ServicesScreen'
// import SkillsScreen from './screens/SkillsScreen'
// import TeamsScreen from './screens/TeamsScreen'
// import ContactMeScreen from './screens/ContactMeScreen'
// import ProjectsScreen from './screens/ProjectsScreen'
import CVscreen from './screens/CVscreen'

import NavBar from './components/Navbar'
// import Footer from './components/Footer'



function App() {

  return (
    <div>
            <NavBar />
    <Router>
        {/* <Header /> */}
        <main className="py-3"> 
          <Container>
            {/* <HomeScreen /> */}
            
            {/* <ProductScreen /> */}
            <Routes>

              
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/cv/" element={<CVscreen />} />
              <Route path="/project/:id/" element={<ProjectDetailsScreen />} />
              {/* <AboutScreen />
              <ServicesScreen />
              <SkillsScreen />
              <TeamsScreen />
              <ProjectsScreen />
              <ContactMeScreen /> */}


            </Routes>
          </Container> 
        </main>
        {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;
