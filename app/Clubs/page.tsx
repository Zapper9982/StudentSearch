"use client";
import {
  Group,
  Stack,
  Text,
  Button,
  Modal,
  TextInput,
  Card,
} from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BadgeCard } from "../Components/BadgeCard";
// import { SessionCard } from "./Components/SessionCard";
// import { ActionRing } from "./Components/ActionRing";

export default function Home() {
  const [user, setUser] = useState("");
  async function getUser() {
    const res = await fetch("http://localhost:6969/user");
    setUser(await res.text());
  }
  const [opened, { open, close }] = useDisclosure(false);
  const [config, setConfig] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);

  return (
    <>
      <div><BadgeCard></BadgeCard></div>
    </>
  );
}
