import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { Anchor, Avatar, Button, Group, Stack, Text } from "@mantine/core";
import classes from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  phone: string;
  mail: string;
  rollno: string;
}

export default function UserCard({ name, phone, mail, rollno }: UserCardProps) {
  return (
    <div>
      <Group wrap="nowrap" justify="space-between">
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
            size={94}
            radius="md"
          />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {rollno}
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              {name}
            </Text>

            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1.5} size={16} className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {mail}
              </Text>
            </Group>

            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
        <Stack w={200}>
          <Button
            variant="light"
            color="pink"
            component="a"
            href={"mailto:" + mail}
          >
            Mail
          </Button>
          <Button variant="light" component="a" href={"/profile/" + rollno}>
            Profile
          </Button>
        </Stack>
      </Group>
    </div>
  );
}
