import ProfileCard from './components/ProfileCard';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <ProfileCard />
      <About />
      <Experience />
      <Skills />
    </div>
  )
}

export default App