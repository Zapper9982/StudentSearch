"use client";

import { ProfileCard } from "@/app/Components/ProfileCard";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Skeleton,
} from "@mantine/core";
import { useState, useEffect } from "react";
import Router from "next/router";

interface ProfileProps {
  params: {
    slug: string;
  };
}

export default function Profile({ params: { slug } }: ProfileProps) {
  const roll = slug;
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/student/details?rollno=${roll}`
        );
        const data = await response.json();
        console.log("Fetched student data:", data);
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [roll]);

  if (loading) {
    return (
      <Container
        w={"100%"}
        mt={"5%"}
        maw={"60%"}
        style={{ overflow: "hidden", height: "100vh" }}
      >
        <Group w={"100%"} gap={"2%"}>
          <Stack w={"40%"} h={"70svh"} style={{ overflowY: "auto" }}>
            <ProfileCard branch={""} roll={""} name={""} year={""} />
            <Card h={150} radius={"md"} withBorder bg={"transparent"} />
          </Stack>
          <Stack
            flex={1}
            style={{ flexGrow: 1, overflowY: "auto" }}
            h={"70svh"}
          >
            <Card
              h={100}
              radius="md"
              withBorder
              style={{ display: "flex", justifyContent: "center" }}
              bg={"transparent"}
            />
            <Card
              flex={1}
              style={{ flexGrow: 1 }}
              radius="md"
              bg={"transparent"}
              withBorder
            >
              <Skeleton height={50} radius="md" />
              <Skeleton height={50} radius="md" />
              <Skeleton height={50} radius="md" />
            </Card>
          </Stack>
        </Group>
      </Container>
    );
  }

  if (!studentData) {
    return (
      <Container
        w={"100%"}
        mt={"5%"}
        maw={"60%"}
        style={{ overflow: "hidden", height: "100vh" }}
      >
        <Text c="red" fz={"xl"} fw={700}>
          Student Not Found
        </Text>
      </Container>
    );
  }

  const { StudentDetails, Member_Clubs, Coordinator_Clubs, CR_Courses } =
    studentData;

  return (
    <Container
      w={"100%"}
      mt={"5%"}
      maw={"60%"}
      style={{ overflowY: "auto", height: "100vh" }}
    >
      <Group w={"100%"} gap={"2%"}>
        <Stack
          w={"40%"}
          h={"70svh"}
          style={{ overflowY: "auto", paddingRight: 10 }}
        >
          <ProfileCard
            branch={"Computer Science And Engineering"}
            roll={StudentDetails.RollNo}
            name={StudentDetails.Name}
            year={"2nd"}
          />
          <Card
            h={150}
            radius={"md"}
            withBorder
            bg={"transparent"}
            style={{
              display: "flex",
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
              href={"mailto:"}
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
        <Stack
          flex={1}
          style={{ flexGrow: 1, overflowY: "auto", paddingRight: 10 }}
          h={"70svh"}
        >
          <Card
            h={100}
            radius="md"
            withBorder
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
            bg={"transparent"}
          >
            <Text fz={"h2"} fw={800} p={20}>
              Get to know {StudentDetails.RollNo}!
            </Text>
          </Card>

          <Card
            flex={1}
            style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 20,
            }}
            radius="md"
            bg={"transparent"}
            withBorder
          >
            <Stack>
              <Stack>
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Name
                </Text>
                <Text fz={"h3"} fw={600}>
                  {StudentDetails.Name}
                </Text>
              </Stack>
              <Stack>
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Dob
                </Text>
                <Text fz={"h3"} fw={600}>
                  {StudentDetails.DOB || "N/A"}
                </Text>
              </Stack>
              <Stack>
                <Text c="dimmed" fz={"h5"} fw={600}>
                  Mail
                </Text>
                <Text fz={"h3"} fw={600}>
                  {StudentDetails.Email || "N/A"}
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Card
            h={250}
            radius="md"
            withBorder
            bg={"transparent"}
            style={{ overflowY: "auto" }}
          >
            <Stack>
              <Text fz={18} fw={600}>
                Position of Responsibilities
              </Text>
              <Group>
                {Coordinator_Clubs.map((club: string, index: number) => (
                  <Badge key={index} size="lg" color="blue">
                    {club}
                  </Badge>
                ))}
              </Group>
            </Stack>
            <Stack mt={10}>
              <Text fz={16} fw={600}>
                Club Member
              </Text>
              <Group>
                {Member_Clubs.map((club: string, index: number) => (
                  <Badge key={index} color="teal">
                    {club}
                  </Badge>
                ))}
              </Group>
            </Stack>
            <Stack mt={10}>
              <Text fz={16} fw={600}>
                Class Representative
              </Text>
              <Group>
                {CR_Courses.length > 0 ? (
                  CR_Courses.map((course: string, index: number) => (
                    <Badge key={index} color="red">
                      {course}
                    </Badge>
                  ))
                ) : (
                  <Badge color="red">None</Badge>
                )}
              </Group>
            </Stack>
          </Card>
        </Stack>
      </Group>
    </Container>
  );
}
