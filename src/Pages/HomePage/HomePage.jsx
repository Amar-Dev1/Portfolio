import { Header, About, Contact, IntroProjects, Footer } from '../../../index';
import Landing from '../../Sections/Landing/Landing';
const HomePage = () => {
    return (
        <>
            <Header />
            <Landing />
            <About />
            <IntroProjects />
            <Contact />
        </>

    )
}

export default HomePage;