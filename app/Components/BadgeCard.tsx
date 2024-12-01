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
  name: string;
  website: string;
  email: string;
  counselor_name: string;
  counselor_phone: string;
  counselor_email: string;
  coordinator: string;
}

export function BadgeCard() {
  const [clubData, setClubData] = useState<ClubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/clubs/list");
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

  const {
    name,
    website,
    email,
    counselor_name,
    counselor_phone,
    counselor_email,
    coordinator,
  } = clubData;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
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
          Email: {email}
        </Text>
        <Text fz="sm" mt="xs">
          Website:{" "}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </Text>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" fw={500}>
          Counselor Details
        </Text>
        <Text fz="sm" mt="xs">
          Name: {counselor_name}
        </Text>
        <Text fz="sm" mt="xs">
          Phone: {counselor_phone}
        </Text>
        <Text fz="sm" mt="xs">
          Email: {counselor_email}
        </Text>
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
