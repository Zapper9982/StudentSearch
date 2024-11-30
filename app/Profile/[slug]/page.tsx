"use client";

import { ProfileCard } from "@/app/Components/ProfileCard";
import {
  Card,
  Container,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default async function Profile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const roll = (await params).slug;
  return (
    <>
      <Container w={"100%"} mt={"5%"} maw={"60%"}>
        <Group w={"100%"} gap={"2%"}>
          <Stack w={"40%"} h={"70svh"}>
            <ProfileCard />
            <Skeleton height={200} radius="md" animate={false} />
          </Stack>
          <Stack flex={1} style={{ flexGrow: 1 }} h={"70svh"}>
            <Card
              h={100}
              radius="md"
              withBorder
              style={{ display: "flex", justifyContent: "center" }}
              bg={"transparent"}
            >
              <Text fz={"h2"} fw={800}>
                Get to know {roll}!
              </Text>
            </Card>

            <Skeleton
              flex={1}
              style={{ flexGrow: 1 }}
              radius="md"
              animate={false}
            />
            <Skeleton height={250} radius="md" animate={false} />
          </Stack>
        </Group>
      </Container>
    </>
  );
}
