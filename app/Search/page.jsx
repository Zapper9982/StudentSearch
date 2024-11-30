"use client";
import { Container, Title, Text, Input, Button, Group, Select } from "@mantine/core";
import { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) {
      alert("Please enter a search query.");
      return;
    }

    try {
      let searchUrl = "";
      if (searchType === "name") {
        searchUrl = `http://127.0.0.1:5000/student/search?name=${searchQuery}`;
      } else if (searchType === "rollno") {
        searchUrl = `http://127.0.0.1:5000/student/search?rollno=${searchQuery}`;
      }

      const response = await fetch(searchUrl, {
        method: "GET",
      });

      if (!response.ok) {
        console.error(`Failed to fetch students. Status: ${response.status}`);
        throw new Error(`Failed to fetch students. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (data.error) {
        setError(data.error);
        setStudents([]);
      } else {
        setStudents(data);
        setError("");
      }
    } catch (err) {
      setError("An error occurred while fetching the students.");
      setStudents([]);
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery, searchType]);

return (
    <Container size="sm" p="lg" sx={{ textAlign: "center" }}>
        <style>{`
            #hi {
                font-size: 50px;
                font-weight: 700;
                margin-top: 0;
                margin-bottom: 0;
                white-space: nowrap;
            }
        `}</style>
        <h1 id="hi">Search for Students </h1>

        <Text size="lg" color="dimmed" mt="sm" mb="lg">
            Type the student's details and choose how you'd like to search.
        </Text>

        <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter search query"
            size="lg"
            mb="lg"
            fullWidth
            sx={{
                borderRadius: "12px",
                padding: "0.75rem 1.25rem",
                borderColor: "#E0E0E0",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:focus": { borderColor: "#1C7ED6", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
            }}
        />

        <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
                <Select
                    value={searchType}
                    onChange={setSearchType}
                    data={[
                        { value: "name", label: "Name" },
                        { value: "rollno", label: "Roll Number" },
                    ]}
                    size="lg"
                    fullWidth
                    sx={{
                        borderRadius: "12px",
                        padding: "0.75rem 1.25rem",
                        borderColor: "#E0E0E0",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        "&:focus": { borderColor: "#1C7ED6", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
                    }}
                />
            </div>
            <div style={{ width: "48%" }}>
                <Button
                    size="lg"
                    radius="md"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    onClick={handleSearch}
                    fullWidth
                    sx={{
                        borderRadius: "12px",
                        padding: "0.75rem",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        "&:hover": { boxShadow: "0 6px 12px rgba(0,0,0,0.2)" },
                    }}
                >
                    Search
                </Button>
            </div>
        </div>

        {error && <Text color="red" mt="sm">{error}</Text>}

        {students.length > 0 && (
            <div>
                <Text size="lg" color="dimmed" mt="sm">Found {students.length} student(s):</Text>
                <ul>
                    {students.map((student, index) => (
                        <div key={index}>
                            <UserCard
                                name={student.Name}
                                rollno={student.RollNo}
                                mail={student.Mail}
                                phone={student.Phone}
                            />
                            <h1>  </h1>
                        </div>
                    ))}
                </ul>
            </div>
        )}
    </Container>
);
}
