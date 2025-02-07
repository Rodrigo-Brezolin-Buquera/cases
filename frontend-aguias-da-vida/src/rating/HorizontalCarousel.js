import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef
} from "react";
import {
  useMediaQuery,
  useTheme,
  Progress,
  VStack,
  Button,
  Flex,
  Box
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { motion, useAnimation, useMotionValue } from "framer-motion";

export const HorizontalCarousel = ({ children, gap }) => {
  const [multiplier, setMultiplier] = useState(0.35);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const itemWidth = 450

  const positions = useMemo(
    () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
    [children, gap]
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, gap]);

  const sliderProps = {
    setActiveItem,
    activeItem,
    constraint,
    positions,
    gap
  };

  const trackProps = {
    setActiveItem,
    activeItem,
    constraint,
    multiplier,
    positions,
    gap
  };

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {children.map((child, index) => (
          <Flex w={`${itemWidth}px`} index={index} key={index}>
            {child}
          </Flex>
        ))}
      </Track>
    </Slider>
  );
};

const Slider = ({
  setActiveItem,
  activeItem,
  constraint,
  positions,
  children,
  gap
}) => {

  const percentage = (x, y) => {
    return 100 / (y / x)
  }

  const handleDecrementClick = () => {
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev) => prev - 1);
  };

  const handleIncrementClick = () => {
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev) => prev + 1);
  };

  return (
    <>
      <Box
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        _before={{
          bgGradient: "linear(to-r, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          left: 0,
          top: 0
        }}
        _after={{
          bgGradient: "linear(to-l, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          right: 0,
          top: 0
        }}
      >
        {children}
      </Box>

      <Flex w={`100%`} mt={`${gap / 2}px`} mx="auto">
        <Button
          onClick={handleDecrementClick}
          mr={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          minW={0}
        >
          <ChevronLeftIcon boxSize={75} />
        </Button>

        <Progress
          value={percentage(activeItem, positions.length - constraint)}
          alignSelf="center"
          borderRadius="2px"
          bg="base.d75"
          flex={1}
          h="5px"
          sx={{
            "> div": {
              backgroundColor: "brand.400"
            }
          }}
        />

        <Button
          onClick={handleIncrementClick}
          ml={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          zIndex={2}
          minW={0}
        >
          <ChevronRightIcon boxSize={75} />
        </Button>
      </Flex>
    </>
  );
};

const Track = ({
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  positions,
  children
}) => {
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef(null);
  const MotionFlex = motion(Flex);

  const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3
  };

  const handleDragStart = () => setDragStartPosition(positions[activeItem]);

  const handleDragEnd = (_, info) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev, curr) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      setActiveItem(positions.indexOf(closestPosition));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps
        }
      });
    } else {
      setActiveItem(positions.length - constraint);
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps
        }
      });
    }
  };

  const handleResize = useCallback(
    () =>
      controls.start({
        x: positions[activeItem],
        transition: {
          ...transitionProps
        }
      }),
    [activeItem, controls, positions]
  );


  useEffect(() => {
    handleResize(positions);
  }, [handleResize, positions]);

  return (
    <VStack ref={node} spacing={5} alignItems="stretch">
      <MotionFlex
        dragConstraints={node}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x }}
        drag="x"
        _active={{ cursor: "grabbing" }}
        minWidth="min-content"
        flexWrap="nowrap"
        cursor="grab"
      >
        {children}
      </MotionFlex>
    </VStack>
  );
};


