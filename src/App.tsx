import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/about-me/AboutMe';
import { Hero } from './layout/sections/hero/Hero';
import { Projects } from './layout/sections/projectsS/Projects';
import { Skills } from './layout/sections/skills/Skills';
import { Testimonials } from './layout/testimonials/Testimonials';
import { Awards } from './layout/awards/Awards';
import { Blogs } from './layout/blogs/Blogs';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Testimonials />
            <Awards/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default App;
