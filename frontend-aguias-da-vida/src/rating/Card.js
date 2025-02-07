import {
  Card,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";


export const RatingCard = ({text, name, avatar}) => {
  return (
    <Card
     maxW="md"
     backgroundColor={"blackAlpha.50"}
     margin={"0em 0.5em"}
     boxShadow="md"
     borderRadius={"20px"}
    >
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={name}
              src={avatar}
            />
            <Box>
              <Heading size="sm">{name}</Heading>
            </Box>
          </Flex>
        </Flex>
        <Box display={"flex"} gap={"0.5em"} marginTop={"0.5em"}>
          <StarIcon color={"gold"} boxSize="24px" />
          <StarIcon color={"gold"} boxSize="24px" />
          <StarIcon color={"gold"} boxSize="24px" />
          <StarIcon color={"gold"} boxSize="24px" />
          <StarIcon color={"gold"} boxSize="24px" />
        </Box>
      </CardHeader>
      <CardBody>
        <Text>
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};
