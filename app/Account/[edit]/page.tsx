"use client";

import { ProfileCard } from "@/app/Components/ProfileCard";
import {
  Button,
  Card,
  Container,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import Router from "next/router";
import { DatePickerInput } from "@mantine/dates";
import '@mantine/dates/styles.css';

interface ProfileProps {
  params: {
    slug: string;
  };
}

export default function EditProfile({ params: { slug } }: ProfileProps) {
  const roll = slug;
  const [Name, setName] = useState("John Doe");
  const [Branch, setBranch] = useState("Computer Science");
  const [Dob, setDob] = useState<Date | null>(null);
  const [Phone, setPhone] = useState("1234567890");
  const [Mail, setMail] = useState("john.doe@example.com");

  const handleSave = () => {
    console.log("Profile updated:", { Name, Branch, Dob, Phone, Mail });
    Router.push("/profile/" + roll);
  };

  return (
    <>
      <Container
        w={"100%"}
        h={"80vh"}
        maw={"90%"}
        mt={"2%"}
        p={0}
      >
        <Group
          align="stretch"
          w={"100%"}
          h={"100%"}
          gap={"1rem"}
          style={{ overflow: "hidden" }}
        >
          {/* Left Side */}
          <Stack
            w={"25%"}
            h={"100%"}
          >
            <ProfileCard />
            <Card
              h={150}
              radius={"md"}
              withBorder
              bg={"transparent"}
              display={"flex"}
              style={{
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                fullWidth
                variant="light"
                color={"pink"}
                component="a"
                size="lg"
                href={"mailto:" + Mail}
              >
                Mail
              </Button>
              <Button
                fullWidth
                variant="light"
                onClick={() => Router.back()}
                size="lg"
              >
                Return
              </Button>
            </Card>
          </Stack>

          {/* Right Side */}
          <Stack
            flex={1}
            h="100%" // Ensure the right side takes full height
          >
            {/* Title */}
            <Card
              radius="md"
              withBorder
              bg={"transparent"}
              style={{ padding: "1rem" }}
            >
              <Text fz={"h2"} fw={800}>
                Edit Profile for {roll}
              </Text>
            </Card>

            {/* Scrollable Form */}
            <Card
              radius="md"
              bg={"transparent"}
              withBorder
              style={{
                padding: "2rem",
                overflowY: "auto", // Enable vertical scrolling
                flex: 1, // Allow this card to take all available space
                maxHeight: "calc(100vh - 150px)", // Adjust the height to fit the layout
              }}
            >
              <Stack>
                {/* Name Field */}
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Name
                </Text>
                <Input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  placeholder="Enter your name"
                  w="100%"
                  style={{ height: "50px" }} // Set consistent height
                />

                {/* Branch Field */}
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Branch
                </Text>
                <Input
                  value={Branch}
                  onChange={(e) => setBranch(e.target.value)}
                  size="lg"
                  placeholder="Enter your branch"
                  w="100%"
                  style={{ height: "50px" }} // Set consistent height
                />

                {/* Date of Birth Field */}
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Date of Birth
                </Text>
                <DatePickerInput
                  
                  placeholder="Pick date"
                  value={Dob}
                  onChange={setDob}
                  size="lg" // Ensure consistent size
                  style={{ height: "50px", width: "100%" }} // Set consistent height and width
                />

                {/* Phone Field */}
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Phone
                </Text>
                <Input
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  size="lg"
                  placeholder="Enter your phone number"
                  w="100%"
                  style={{ height: "50px" }} // Set consistent height
                />

                {/* Email Field */}
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Email
                </Text>
                <Input
                  value={Mail}
                  onChange={(e) => setMail(e.target.value)}
                  size="lg"
                  placeholder="Enter your email"
                  w="100%"
                  style={{ height: "50px" }} // Set consistent height
                />
              </Stack>
            </Card>

            {/* Save Button */}
            <Card
              radius="md"
              withBorder
              bg={"transparent"}
              style={{ padding: "1rem" }}
            >
              <Button
                fullWidth
                size="lg"
                color="blue"
                onClick={handleSave}
                variant="filled"
              >
                Save Changes
              </Button>
            </Card>
          </Stack>
        </Group>
      </Container>
    </>
  );
}
