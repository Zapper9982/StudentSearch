import { Avatar, Card, Stack, Text } from "@mantine/core";
import classes from "./ProfileCard.module.css";

interface ProfileCardProps {
  branch: string;
  roll: string;
  name: string;
  year: string;
  avatarUrl?: string;
  coverImageUrl?: string;
}

export function ProfileCard({
  branch,
  roll,
  name,
  year,
  avatarUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
  coverImageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
}: ProfileCardProps) {
  return (
    <Card
      withBorder
      padding="xl"
      radius="md"
      flex={1}
      style={{ flexGrow: 1 }}
      className={classes.card}
    >
      <Card.Section
        h={"40%"}
        style={{
          backgroundImage: `url(${coverImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Avatar
        src={avatarUrl}
        size={80}
        style={{ aspectRatio: "1/1" }}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Student
      </Text>
      <Stack mt="md" justify="center" gap={20}>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            {branch}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Branch
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            {roll}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Roll Number
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            {year}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Year
          </Text>
        </div>
      </Stack>
    </Card>
  );
}
