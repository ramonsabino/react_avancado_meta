import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="gray.200"
      p={4}
      color="white"
      backgroundColor="white"
      alignItems="flex-start"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
    >
      <Image src={imageSrc} borderRadius="md" />
      <VStack alignItems="flex-start" spacing={2}>
        <Heading as="h3" size="md" color={"black"}>
          {title}
        </Heading>
        <Text fontSize={"sm"} color={"gray.600"}>
          {description}
        </Text>
        <HStack alignItems="center">
          <Text fontWeight="bold" color="gray.600">
            Learn more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
