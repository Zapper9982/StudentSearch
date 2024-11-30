import { useState, useEffect } from "react";
import { IconHeart } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import classes from "./BadgeCard.module.css";

interface ClubData {
  image: string;
  name: string;
  description: string;
  coordinator: string;
  co_coordinator: string;
  tags: string[];
}

export function BadgeCard() {
  const [clubData, setClubData] = useState<ClubData | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/clubs/lists"); 
        const data = await response.json();
        setClubData(data);
      } catch (error) {
        console.error("Error fetching club data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!clubData) {
    return <Text>Failed to load data.</Text>;
  }

  const { image, name, description, coordinator, co_coordinator, tags } =
    clubData;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Badge size="sm" variant="light">
            Coordinator: {coordinator}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Tags
        </Text>
        <Group gap={7} mt={5}>
          {tags?.map((tag) => (
            <Badge variant="light" key={tag}>
              {tag}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
