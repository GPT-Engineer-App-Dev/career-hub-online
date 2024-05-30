import { Container, Text, VStack, Heading, Box, Button, Stack, HStack, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBriefcase, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Job Listings
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your dream job or post a job opening to find the perfect candidate.
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<Icon as={FaBriefcase} />} colorScheme="teal" variant="solid" size="lg">
            View Job Listings
          </Button>
          <Button as={RouterLink} to="/post-job" leftIcon={<Icon as={FaPlus} />} colorScheme="teal" variant="outline" size="lg">
            Post a Job
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;