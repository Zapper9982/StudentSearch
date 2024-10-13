"use client";
import { Group, Stack, Text , Button , Modal , TextInput , Card } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useEffect, useState } from "react";
import { useDisclosure } from '@mantine/hooks';
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
  const [loading,setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  





  return (
    <>
    

    
    
    {/* <Group style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
      <Group gap={0} align="baseline">
        <Text fz={28} fw={600}>Good Evening</Text>
        <Text fw={600} fz={32} ml={8} c={"indigo"}>{user.slice(0,1).toUpperCase() + user.slice(1,)} !</Text>
        <Text w={"100%"} fz={16} fw={400} style={{translate:"0px -5px"}} c={"dimmed"}>Ready to be productive?</Text>
      </Group>
  
    </Group>
    <Group gap={0} align="baseline" my={"md"}>
      <Text fz={24} fw={600}>Recent Sessions</Text>
    </Group> */}
   <div>
    Hello
   </div>

    </>
  );
}