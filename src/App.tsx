import { Fade } from 'react-awesome-reveal';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/about-me/AboutMe';
import { Awards } from './layout/sections/awards/Awards';
import { Blogs } from './layout/sections/blogs/Blogs';
import { Hero } from './layout/sections/hero/Hero';
import { Projects } from './layout/sections/projectsS/Projects';
import { Skills } from './layout/sections/skills/Skills';
import { Testimonials } from './layout/testimonials/Testimonials';

function App() {
    return (
        <div className="App">
            <Header />
            <Fade triggerOnce={false} duration={800}>
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Testimonials />
                <Awards />
                <Blogs />
                <Footer />
            </Fade>
        </div>
    );
}

export default App;
