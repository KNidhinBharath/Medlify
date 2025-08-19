import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

 export default function IconCard({
    img,
    title,
    active = false,
    shadow = false,
    bgColor
 }) {

    return(

            <Stack 
               spacing={2}
               alignItems="center"
               bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
               padding= {3}
               borderRadius={2}
               border={active ? "1px solid #2AA7FF" : "0"}
               boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
               
             >
                  <Box component= "img" src={img} height= "60px" width= "60px" />
                  <Typography
                     fontWeight={active ? 600 : 400 }
                     color={active ?" #2AA7FF" : "#ABB6C7"}>{title}</Typography>
            </Stack>
            

       

    )

    
 }