import { getClubs, createClub } from "../../../lib/prisma/clubs"; // this is a server component, so we can access getClubs()
import Link from "next/link";
import CreateClubButton from "./CreateClubButton";

const Clubs = async () => {
  const { clubs } = await getClubs();

  return (
    <div className="bg-sky-300">
      <ul className="mb-12">
        {clubs?.map((club) => (
          <li key={club.id}>
            <Link href={`/clubs/${club.id}`}>{club.name}</Link>
          </li>
        ))}
      </ul>

      <CreateClubButton />
    </div>
  );
};

export default Clubs;
