import mobile from "../../Assets/mobile.jpg";
import playstore from "../../Assets/google.png";
import apple from "../../Assets/apple.png";
import arrow from "../../Assets/arrow.png";
import { Box,Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";




export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box src={mobile} component="img" width={1} height="427px" />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

             <SmsForm/>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Box component="img" src={playstore} height="24" alt="google" 
                  sx={{
                    py: 1.5,
                    borderRadius: 1.5,
                    cursor:"pointer"
                  }}
               
                />
             
                 <Box component="img" src={apple} height="24" alt="google" 
                  sx={{
                    py: 1.5,
                    borderRadius: 1.5,
                    cursor:"pointer"
                    
                  }}
               
                />
                  
                
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
