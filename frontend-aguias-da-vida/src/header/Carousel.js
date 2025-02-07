import { Box, Image } from '@chakra-ui/react';
import { useState, useEffect } from "react"
import image1 from "../assets/Image1.jpg"
import image2 from "../assets/Image2.jpg"
import image3 from "../assets/Image3.jpg"

const images = [
    {
        src: image1,
        alt: "Imagem Carossel 1"
    },
    {
        src: image2,
        alt: "Imagem Carossel 2"
    },
    {
        src: image3,
        alt: "Imagem Carossel 3"
    },
   
];


export const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
            <Box
                position='relative'
                w='100%'
                h={"0"}
                paddingBottom={`clamp(0%, ${0.5625 * 100}%, 1080px)`} // alterar com tamanho max da height e o ratio
                display={"flex"}
                justifyContent={"center"}
                backgroundColor={"rgba(0, 0, 0, 0.9)"}
            >
                {images.map((image, index) => (
                    <Image
                        key={image.alt}
                        alt={image.alt}
                        src={image.src}
                        layout="fill"
                        style={{
                            objectFit:"cover",
                            position: "absolute",
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    />
                ))}
            </Box>   
    );
};