import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import img1 from "../../Assets/Drugstore.png"
import img2 from "../../Assets/Stethoscope.png"
import img3 from "../../Assets/hr.png"
import img4 from "../../Assets/hrm.png"
import img5 from "../../Assets/Blood.png"
import img6 from "../../Assets/Immune.png"
import img7 from "../../Assets/X-Ray.png"
import IconCard from "../IconCard/IconCard";
import Button from "@mui/material/Button";

export default function Specialization (){

    const data = [

        { icon: img1, title: 'Dentistry' },
        { icon: img2, title: 'Primary Care' },
        { icon: img3, title: 'Cardiology' },
        { icon: img4, title: 'MRI Resonance' },
        { icon: img5, title: 'Blood Test' },
        { icon: img6, title: 'Piscologist' },
        { icon: img1, title: 'Laboratory' },
        { icon: img7, title: 'X-Ray' }
    ]

    return (
        <Box py={6}>
            <Container sx={{textAlign:"center"}}>

                <Typography variant="h2">
                    Find By Specialization
                </Typography>

                <Grid container spacing={{xs:1,md:3}} mb={5} justifyContent={'center'} >
                    {data.map((item) => (
                      <Grid item xs = {4} md = {3} key={item.title}>
                            <IconCard 
                            img = {item.icon}
                            title= {item.title}
                            bgColor= "#FFFFFF"
                            shadow = {true}/>
                      </Grid>
                        
                    ))}

                </Grid>
                    <Button
                        variant="contained"
                        size="large"
                        disableElevation
                    >
                    View All
                    </Button>
            </Container>
        </Box>
        
    )
}