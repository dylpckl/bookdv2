"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateClubButton() {
  const router = useRouter();
  const [name, setName] = useState("something else");
  const [description, setDescription] = useState("a new club to use");
  const [ownerId, setOwnerId] = useState("clcjc37n000000wasft7knk9x");

  const handleCreate = async () => {
    const body = { name, description, ownerId };
    // console.log(body);
    try {
      const res = await fetch(`/api/clubs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      console.log(result)
      if (res.status === 200) {
        // console.log(res.json());
        router.push(`/clubs/${result.club.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleCreate}>create club</button>;
}
