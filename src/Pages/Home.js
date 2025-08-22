import Container from "@mui/material/Container";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Offers from "../Components/Offers/Offers";
import Specialization from "../Components/Specialization/Specialization";
import Specialists from "../Components/Specialists/Specialists";
import PatientCaring from "../Components/PatientCaring/PatientCaring";
import Blogs from "../Components/Blogs/Blogs";
import OurFamilies from "../Components/OurFamilies/OurFamilies";
import FAQs from "../Components/FAQs/FAQs";
import DownloadApp from "../Components/DownloadApp/DownloadApp";
import Footer from "../Components/Footer/Footer";
import Motto from "../Components/Motto";

export default function Home() {

    return(
        <Box className="Home">
            <Motto/>
            <Container>
                <Navbar/>
                <Hero/>
            </Container>
            <Offers/>
            <Specialization/>
            <Specialists/>
            <PatientCaring/>
            <Blogs/>
            <OurFamilies/>
            <FAQs/>
            <DownloadApp/>
            <Footer/>
            
            
            
        </Box>
    )
}