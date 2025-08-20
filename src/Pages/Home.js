import Container from "@mui/material/Container";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Offers from "../Components/Offers/Offers";
import Specialization from "../Components/Specialization/Specialization";
import Specialists from "../Components/Specialists/Specialists";

export default function Home() {

    return(
        <Box className="Home">
            <Box className='motto'>
                <Typography variant="h6" sx={{
                    fontSize:"1rem",
                    fontWeight:"400"
                }}> The health and well-being of our patients and their health care team will always be our priority, 
                    so we follow the best practices for cleanliness.</Typography>
            </Box>
            <Container>
                <Navbar/>
                <Hero/>
            </Container>
            <Offers/>
            <Specialization/>
            <Specialists/>

            
            
            
        </Box>
    )
}