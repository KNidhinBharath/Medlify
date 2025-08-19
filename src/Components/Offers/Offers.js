import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import Offer1 from "../../Assets/Offer1.png"
import Offer2 from "../../Assets/Offer2.png"
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css';

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth="xl">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination ={{
                        clickable: true
                    }}
                    breakpoints={
                        {
                        767 : {
                            slidesPerView:3
                              }
                        }
                    }
                    >
                    
                    <SwiperSlide>
                        <Box component="img" src={Offer1}></Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component="img" src= {Offer2}></Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component="img" src={Offer1}></Box>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Box component="img" src= {Offer2}></Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component="img" src={Offer1}></Box>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Box component="img" src= {Offer2}></Box>
                    </SwiperSlide>
                   
                </Swiper>
            </Container>
        </Box>
    )
}