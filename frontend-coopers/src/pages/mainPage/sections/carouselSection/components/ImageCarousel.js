import { Box, Button } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { InformationCard } from "./InformationCard";
import Photo2 from "../../../../../assets/Photo2.png"
import Photo3 from "../../../../../assets/Photo3.png"
import Photo4 from "../../../../../assets/Photo4.png"
import { CustomDot } from "./CustomDot";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const ImageCarousel = () => {
    return (
        <Box  >
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                arrows={false}
                responsive={responsive}
                infinite={true}
                autoPlay={ true }
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                customDot={ <CustomDot/>                }

            >
                <InformationCard image={Photo2} text={"Careful with missunderstanding the difference between a list of things and a list of desires."}/>
                <InformationCard image={Photo3} text={"Organize your daily job enhance your life performance"}/>
                <InformationCard image={Photo4} text={"Mark one activity as done makes your brain understands the power of doing."}/>
                
            </Carousel>;
        </Box>
    )
}