"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const {removeAccessToken} = useContext(AuthContext);
  return (
    <div>
      <Button onClick={removeAccessToken}>
        Home
      </Button>
    </div>
  );
}
