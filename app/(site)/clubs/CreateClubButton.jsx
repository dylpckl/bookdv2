"use client";
import Router from "next/router";
import { useState } from "react";
// import { createClub } from "../../lib/clubs";

export default function CreateClubButton() {
  const [name, setName] = useState("new club");
  const [description, setDescription] = useState("a new club to use");
  const [ownerId, setownerId] = useState(1);
  //   const handleCreate = async () => {
  //     try {
  //       const body = { name, description };
  //       await fetch(`/api/clubs`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }

  // let title = "title";
  // let post = "post";

  // const postData = async () => {
  //   const data = {
  //     title: title,
  //     post: post,
  //   };

  //   const response = await fetch("/api/post", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // };
  // postData().then((data) => {
  //   console.log(data.message);
  // });

  // await Router.push(`/clubs/${newClubId}`)

  // const body = {
  //   name: "clubName",
  //   description: "a cool club",
  //   owner: 1,
  // };

  const handleCreate = async () => {
    const body = { name, description, ownerId };
    try {
      await fetch(`/api/clubs/`, {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleCreate}>create club</button>;
}
