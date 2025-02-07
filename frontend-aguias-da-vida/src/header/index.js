import { Box, Text } from "@chakra-ui/react";
import { ImageCarousel } from "./Carousel";

const Header = () => {
  return (
    <Box w="100%" pos={"relative"} display="block">
      <Box
        h={"70px"}
        w={"100%"}
        position={"absolute"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        zIndex="1"
        opacity={["1", "0.75", "0.75"]}
        backgroundColor={["none", "white", "white"]}
        color={"black"}
        as="b"
      >
        <Box
          fontSize="14px"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          letterSpacing="-0.5px"
          lineHeight="1.1"
        >
          <Text>GRUPO </Text>
          <Text>ÁGUIAS </Text>
          <Text>DA VIDA</Text>
        </Box>

        <Text cursor="pointer" _hover={{ color: "blue.600" }}>
          Início
        </Text>
        <Text cursor="pointer" _hover={{ color: "blue.600" }}>
          Sobre Nós
        </Text>
        <Text cursor="pointer" _hover={{ color: "blue.600" }}>
          Clínicas
        </Text>
        <Text cursor="pointer" _hover={{ color: "blue.600" }}>
          Blog
        </Text>
        <Text cursor="pointer" _hover={{ color: "blue.600" }}>
          Ajuda
        </Text>
      </Box>
      <ImageCarousel />

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
      >
        As Melhores Clínicas de Recuperação Álcoolismo | Dependência Quimica |
        Transtornos Psiquiatricos
      </Text>
    </Box>
  );
};

export default Header;
