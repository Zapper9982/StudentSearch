"use client";
import { Container, Title, Text, Input, Button, Group } from "@mantine/core";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
 
    alert(`Searching for students with query: ${searchQuery}`);
  };

  return (
    <Container size="sm" p="lg" sx={{ textAlign: "center" }}>
      <Title order={1} sx={{ fontSize: "3rem", color: "#1C7ED6" }}>
        Search for Students
      </Title>

      <Text size="lg" color="dimmed" mt="sm" mb="lg">
        Type the student's name or details you want to search for.
      </Text>

      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter student name"
        size="lg"
        mb="lg"
      />

      <Group position="center">
        <Button size="lg" radius="md" variant="gradient" gradient={{ from: "blue", to: "cyan" }} onClick={handleSearch}>
          Search
        </Button>
      </Group>
    </Container>
  );
}
