import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import texts from "./texts";

const Information = () => {
  const [display, setDisplay] = useState("");

  return (
    <Box
      backgroundColor={"blue.500"}
      color="white"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"1em"}
    >
      <Box
        display={"flex"}
        w={"100%"}
        justifyContent={"space-around"}
        fontSize={"20px"}
        marginTop={"0.1em"}
        h={"40px"}
      >
        <Text
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          onMouseEnter={() => setDisplay("alcoolismo")}
        >
          Alcoolismo
        </Text>
        <Text
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          onMouseEnter={() => setDisplay("dependencia")}
        >
          Dependência Química
        </Text>
        <Text
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          onMouseEnter={() => setDisplay("transtornos")}
        >
          Transtornos Mentais
        </Text>
        <Text
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          onMouseEnter={() => setDisplay("idosos")}
        >
          Lar para Idoso
        </Text>
      </Box>

      {display ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"0em 2em"}
          gap={"1em"}
          h={"300px"}
          backgroundColor={"blue.400"}
          borderRadius={"25px"}
          marginTop={"1em"}
          boxShadow="md"
          overflow="hidden"
          animation="expandBox 0.8s ease-out"
          sx={{
            "@keyframes expandBox": {
              "0%": { height: "0px", opacity: 0 },
              "100%": { height: "300px", opacity: 1 },
            },
          }}
        >
          <Heading fontSize={"3xl"} >
            {texts[display].title}
          </Heading>
          <Text textAlign={"center"}>{texts[display].text}</Text>
          <Heading fontSize={"1xl"}>{texts[display].cta}</Heading>
          <Text
            as="b"
            fontSize={"20px"}
            _hover={{ cursor: "pointer", color: "blue.100" }}
          >
            Leia mais
          </Text>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Information;
