import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {

    return(
        <div className="Home">
            <div className='motto'>
                <h6> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h6>
            </div>
            <Navbar/>
            <Hero/>
            
        </div>
    )
}