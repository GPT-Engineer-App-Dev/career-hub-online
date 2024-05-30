import React, { useState } from 'react';
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const ApplyJob = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Application submitted.",
      description: "Your job application has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setName('');
    setEmail('');
    setResume('');
    setCoverLetter('');
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Apply for Job</Heading>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="resume" isRequired>
              <FormLabel>Resume</FormLabel>
              <Input type="file" value={resume} onChange={(e) => setResume(e.target.value)} />
            </FormControl>
            <FormControl id="coverLetter">
              <FormLabel>Cover Letter</FormLabel>
              <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">Submit Application</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default ApplyJob;