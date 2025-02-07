import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { RatingCard } from "./Card.js";
import userPosts from "./userPosts.js";

const Rating = () => {

  return (
    <Box>
      <HorizontalCarousel gap={2}>
        {userPosts &&
          userPosts.map((user) => (
            <RatingCard
              key={user.name}
              name={user.name}
              avatar={user.avatar}
              text={user.text}
            />
          ))}
      </HorizontalCarousel>
    </Box>
  );
};

export default Rating;
