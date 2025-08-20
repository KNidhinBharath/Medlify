import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Assets/ahmad.png"
import img2 from "../../Assets/Ankur.png"
import img3 from "../../Assets/Heena.png"
import img4 from "../../Assets/Ahmedk.png"
import img5 from "../../Assets/Lesley.png"
import { Autoplay, Pagination } from "swiper/modules";
import SpecialistCard from "./SpecilalistCard";

export default function Specialists() {
    const docData = [
        {img:img1,title:"Dr. Ahmad Stevens",desc:"Neurologist"},
        {img:img2,title:"Dr. Ankur Sharma",desc:"Medicine"},
        {img:img3,title:"Dr. Heena Sachdeva",desc:"Orthopadics"},
        {img:img4,title:"Dr. Ahmad Khan",desc:"Neurologist"},
        {img:img5,title:"Dr. Lesley Hull",desc:"Medicine"},
        {img:img1,title:"Dr. Ahmad Stevens",desc:"Neurologist"},
        {img:img2,title:"Dr. Ankur Sharma",desc:"Medicine"},
        {img:img3,title:"Dr. Heena Sachdeva",desc:"Orthopadics"},
        {img:img4,title:"Dr. Ahmad Khan",desc:"Neurologist"},
        {img:img5,title:"Dr. Lesley Hull",desc:"Medicine"},
    ]
    return (
        <Box py={4}>
            <Typography variant="h2" textAlign="center" mb={8} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={4}
                spaceBetween={30} 
                loop={true}
                centeredSlides={true}
               
                pagination = {{
                    clickable: true
                }}

                 autoplay = {{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                 modules={[Autoplay,Pagination]}

                 breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
                    
                >
                {docData.map((doc,index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard 
                          img={doc.img}
                          title={doc.title}
                          designation={doc.desc}
                            />
                     
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </Box>
    )
}