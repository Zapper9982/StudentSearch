"use client";

import { ProfileCard } from "@/app/Components/ProfileCard";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import Router from "next/router";

const child = <Skeleton height={140} radius="md" animate={false} />;

interface ProfileProps {
  params: {
    slug: string;
  };
}

export default function Profile({ params: { slug } }: ProfileProps) {
  const roll = slug;
  const [Name, setname] = useState("");
  const [Branch, setbranch] = useState("");
  const [Dob, setdob] = useState("");
  const [Phone, setphone] = useState("");
  const [Mail, setmail] = useState("");

  return (
    <>
      <Container w={"100%"} mt={"5%"} maw={"60%"}>
        <Group w={"100%"} gap={"2%"}>
          <Stack w={"40%"} h={"70svh"}>
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
                {/* <Text c={"pink"} fz={20} fw={600} style={{ letterSpacing: 4 }}> */}
                Mail
                {/* </Text> */}
              </Button>
              <Button
                fullWidth
                variant="light"
                onClick={() => Router.back()}
                size="lg"
              >
                {/* <Text c={"blue"} fz={20} fw={600} style={{ letterSpacing: 4 }}> */}
                Return
                {/* </Text>{" "} */}
              </Button>
            </Card>
            {/* <Skeleton height={200} radius="md" animate={false} /> */}
          </Stack>
          <Stack flex={1} style={{ flexGrow: 1 }} h={"70svh"}>
            <Card
              h={100}
              radius="md"
              withBorder
              style={{ display: "flex", justifyContent: "center" }}
              bg={"transparent"}
            >
              <Text fz={"h2"} fw={800} p={20}>
                Get to know {roll}!
              </Text>
            </Card>

            <Card
              flex={1}
              style={{ flexGrow: 1 }}
              radius="md"
              bg={"transparent"}
              withBorder
            >
              <Stack>
                <Stack p={20}>
                  <Text c="dimmed" fz={"h5"} fw={600}>
                    Name{" "}
                  </Text>
                  <Text fz={"h3"} fw={600}>
                    {Name}
                  </Text>
                </Stack>
                <Stack p={20}>
                  <Text c="dimmed" fz={"h5"} fw={600}>
                    Dob{" "}
                  </Text>
                  <Text fz={"h3"} fw={600}>
                    {Dob}
                  </Text>
                </Stack>
                <Stack p={20}>
                  <Text c="dimmed" fz={"h5"} fw={600}>
                    Mail{" "}
                  </Text>
                  <Text fz={"h3"} fw={600}>
                    {Mail}
                  </Text>
                </Stack>
              </Stack>
            </Card>
            {/* <Skeleton height={250} radius="md" animate={false} /> */}
            <Card h={250} radius="md" withBorder bg={"transparent"}>
              <Stack>
                <Text fz={18} fw={600}>
                  Position of Responsibilities
                </Text>
                <Group>
                  <Badge size="lg" color="blue">
                    Co-Cordinator Samvaad
                  </Badge>
                </Group>
              </Stack>
              <Stack mt={10}>
                <Text fz={16} fw={600}>
                  Club Member
                </Text>
                <Group>
                  <Badge color="teal">Samvaad</Badge>
                  <Badge color="teal">Samvaad</Badge>
                  <Badge color="teal">Samvaad</Badge>
                  <Badge color="teal">Samvaad</Badge>
                </Group>
              </Stack>
              <Stack mt={10}>
                <Text fz={16} fw={600}>
                  Class Representative
                </Text>
                <Group>
                  <Badge color="red">None</Badge>
                </Group>
              </Stack>
            </Card>
          </Stack>
        </Group>
      </Container>
    </>
  );
}
