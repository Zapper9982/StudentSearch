"use client"; 

import { useRouter } from 'next/navigation'; 
import { Center, Container, Button, Text } from '@mantine/core';
import { useState } from 'react';

export default function Home() {
  const router = useRouter(); // Using useRouter from next/navigation
  const [user, setUser] = useState("");

  async function getUser() {
    try {
      const res = await fetch("http://localhost:6969/user");
      const data = await res.text();
      setUser(data);
    } catch (error) {
      setUser("Error fetching user data.");
    }
  }

  // Navigate to the search page
  function navigateToSearch() {
    router.push("/Search"); // Navigate to /search page
  }

  return (
    <>
      <style>
        {`
          #main {
            height: 80vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 95px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 0;
            white-space: nowrap; /* Ensures text stays in one line */
          }
          .blue {
            color: #2196F3;
          }
        `}
      </style>
      <div id="main">
        <Container
          size="sm"
          p="lg"
        >
          <Center>
            <h1>📎 Student <span className="blue">Search</span></h1>
          </Center>

          <Text size="lg" color="dimmed" align="center" mt="sm" mb="lg">
            A simple Application for you to search for students
          </Text>

          <Center>
            <Button
              size="lg"
              radius="md"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              onClick={navigateToSearch}
              sx={{ padding: "10px 30px" }}
            >
              Search Students 📚
            </Button>
          </Center>
        </Container>
      </div>
    </>
  );
}
