import { Box, Container, Grid, ListItemIcon, ListItemText, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import tick from '../../Assets/tick.png'
import Patient from "../../Assets/PatientCaring.png"

export default function PatientCaring(){

    return(
         <Box py={6} >
            <Container >
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs = {12} md = {6}>
                        <Box 
                            component="img"
                            alt="patient" 
                            src={Patient}
                            width={1}
                        />
                        
                    </Grid>
                    <Grid item xs = {12} md = {6} textAlign="start" pl={2}
                     sx={{maxWidth:"600px", height:"auto"}}>
                        <Typography fontWeight={600} color="#2AA7FF">
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" fontWeight={600} mb={1} >
                            Patient <Box component="span" color="#2AA7FF">Caring</Box> 
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8} >
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
                            We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>
                        <List sx={{fontSize:{xs:12 , md:18}}}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component="img" src ={tick} height={22} width={22}/>
                                </ListItemIcon>

                                <ListItemText 
                                    primary = "Stay Updated About Your Health"
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem >
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
   
}