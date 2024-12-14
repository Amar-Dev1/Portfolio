import { Header, About, Contact, IntroProjects, Footer } from '../../../index';
import Landing from '../../Sections/Landing/Landing';
const HomePage = () => {
    return (
        <>
            <div className="upper-section">
                <Header />
                <Landing />
            </div>
            <About />
            <IntroProjects />
            <Contact />
        </>

    )
}

export default HomePage;