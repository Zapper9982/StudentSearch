"use client";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./Authentication.module.css";
import { useState } from "react";

export default function AuthenticationTitle() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (!data["error"]) {
      //   console.log(data);
      localStorage.setItem("token", data[0]["token"]);
      localStorage.setItem("roll", username);
      window.location.href = "/Search";
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Use your NKN credentials?{" "}
        {/* <Anchor size="sm" component="button">
          Create account
        </Anchor> */}
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Roll Number"
          placeholder="2XBXX000"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={login}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
