import { getClubs, createClub } from "../../lib/clubs";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import CreateClubButton from "./CreateClubButton";
// this is a server component, so we can access getClubs()

const Clubs = async () => {
  const { clubs } = await getClubs();

  return (
    <div className="bg-sky-300">
      <ul>
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
