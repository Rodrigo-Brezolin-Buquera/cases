import { Box, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";

const images = [
  {
    src: image1,
    alt: "Imagem Carossel 1",
    text: "Clínicas para Álcoolismo, Dependência Quimica e Transtornos Psiquiatricos",
  },
  {
    src: image2,
    alt: "Imagem Carossel 2",
    text: "Clínicas de Recuperação Particulares ou por Convênio Médico",
  },
  {
    src: image3,
    alt: "Imagem Carossel 3",
    text: "Garantia de tratamento humanizado e melhora da qualidade de vida",
  },
];

export const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <Box
      position="relative"
      w="100%"
      h={"0"}
      paddingBottom={`clamp(0%, ${0.5625 * 100}%, 1080px)`} // alterar com tamanho max da height e o ratio
      display={"flex"}
      justifyContent={"center"}
      backgroundColor={"rgba(0, 0, 0, 0.9)"}
    >
      {images.map((image, index) => (
        <>
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="32px"
            fontWeight="bold"
            textAlign="center"
            color="white"
            backgroundColor="rgba(0, 0, 0, 0.4)"
            px="10px"
            py="5px"
            borderRadius="16px"
            zIndex="10"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {image.text}
          </Text>
          <Image
            key={image.alt}
            alt={image.alt}
            src={image.src}
            layout="fill"
            style={{
              objectFit: "cover",
              position: "absolute",
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </>
      ))}
    </Box>
  );
};
