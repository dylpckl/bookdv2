"use client";
import { useRouter } from "next/navigation";

export default function DeleteClubButton(clubId) {
  const router = useRouter();

  //   const handleCreate = async () => {
  //     const body = { name, description, ownerId };
  //     // console.log(body);
  //     try {
  //       const res = await fetch(`/api/clubs`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       });
  //       const result = await res.json();
  //       console.log(result);
  //       if (res.status === 200) {
  //         // console.log(res.json());
  //         router.push(`/clubs/${result.club.id}`);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  console.log("deletebuttonzxx", clubId);
  const handleDeleteButton = async (clubId) => {
    try {
      const res = await fetch(`/api/clubs/${clubId}`, {
        method: "DELETE",
      });
      const result = await res.json();
      
    } catch (error) {
      console.error(error);
    }

    // await router.push(`/clubs`);
  };

  return <button onClick={handleDeleteButton}>delete club</button>;
}
