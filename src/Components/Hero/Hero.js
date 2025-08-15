import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box"
import heroimage from "../../Assets/hero_image.png"

export default function Hero() {

    return(
        <div className="Hero" >
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
                            >Skip the travel! Find Online </Typography>

                                <Typography component="div"
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

            </div>
    )
}