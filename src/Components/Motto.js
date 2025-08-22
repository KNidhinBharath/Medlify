import { Box, Typography } from "@mui/material";

export default function Motto(){
    return (
        <Box className='motto' >
                <Typography variant="h6" 
                sx={{
                    fontSize:"1rem",
                    fontWeight:"400",
                    textAlign:"center"
                }}> The health and well-being of our patients and their health care team will always be our priority, 
                    so we follow the best practices for cleanliness.</Typography>
        </Box>
    )
}