import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box"
import heroimage from "../../Assets/hero_image.png"
import SearchBar from "./SearchBar";
import Doctorimg from "../../Assets/Doctor.png"
import Labs from "../../Assets/Drugstore.png"
import Hospitals from "../../Assets/Hospital.png"
import Store from "../../Assets/Capsule.png"
import Ambulance from "../../Assets/Ambulance.png"
import { useMemo } from "react";
import IconCard from "../IconCard/IconCard";
import '../../Styles/Hero.css'

export default function Hero() {

    const Services = useMemo( () => [
      { img: Doctorimg, title: "Doctors" },
      { img: Labs, title: "Labs" },
      { img: Hospitals, title: "Hospitals", active: true },
      { img: Store, title: "Medical Store" },
      { img: Ambulance, title: "Ambulance" },
])


    return(
        <Box className="Hero" >
                <Grid container spacing={2} 
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        objectFit:"contain"
                       }}>

                    <Grid item xs={6} className = "hero-txt"
                        sx={{  
                            position:"relative",
                            top:"100px",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"flex-start"
                            }}>

                        <Stack direction={{xs:"column"}}>

                            <Typography 
                             sx={{
                                  fontSize:"31px" ,
                                  display:"flex"                        
                                }}
                            >Skip the travel! Find Online 
                            </Typography>

                                <Typography component="Box"
                                    sx={{
                                        display:"flex",
                                        columnGap:1,
                                        lineHeight:1.2
                                       }}
                                    >
                                        <span style={{fontSize:"56px",fontWeight:'bolder'}}>
                                            Medical 
                                        </span>

                                        <span style={{fontSize:"56px",fontWeight:'bolder' ,color:"#2AA7FF"}}>
                                            Centers 
                                        </span>

                                </Typography>

                        </Stack>
                        
                         <Box sx={{
                                    display:"flex",
                                    flexDirection:"column",
                                    alignItems:"flex-start",
                                    fontSize:"20px",
                                    fontWeight:"400",
                                    color:"#5C6169",
                                    paddingBottom:"1rem"
                                }}>

                            <Typography variant="h6">
                                Connect instantly with a 24x7 specialist or choose to 
                            </Typography>

                            <Typography variant="h6">
                                video visit a particular doctor.
                            </Typography> 
                            
                         </Box>
                            
                        
                        <button 
                            className="btn"
                            style={{padding:'10px',fontWeight:"normal" ,border:'none',fontSize:'16px'}}
                        >
                            Find Centers</button>

                    </Grid>

                    <Grid item xs={6} className = "hero-img"
                        sx={{
                            display:"flex"
                            
                        }}>
                            <img src={heroimage}
                             alt="doc-image"
                             style={{
                                width:"643px",
                                height:"auto",
                                objectFit:"contain"
                                }}
                             
                             ></img>

                    </Grid>

                </Grid>

                <Box className= "SearchCategory"
                    sx={{
                        padding:"2rem",
                        position :"relative",
                        top:"-290px",
                        right:"30px",
                        backgroundColor:"#F0F0F0"
                        
                    }}>
                            <SearchBar/>        

                    <Typography
                        component="h4"
                        fontSize={20}
                        color="#102851"
                        fontWeight={500}
                        textAlign="center"
                        m={2}
                >
                        You may be looking for
                    </Typography>
                
                    <Grid
                        container
                        columnSpacing={{ xs: 1, md: 2 }}
                        gap={10}
                        justifyContent={"center"}
                        >
                        

                    {
                        Services.map((item) => (
                        <Grid item key={item.title} xs={4} md={2.4}>
                            <IconCard
                                img = {item.img}
                                title = {item.title}
                                active = {item.active || false}
                                bgColor = "#FAFBFE"
                            />
                        </Grid>))
                    }
                    </Grid>                     
                </Box>

            </Box>
    )
}