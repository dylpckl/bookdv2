import { getClubs } from "../../lib/clubs";
import Link from "next/link";

// this is a server component, so we can access getClubs()

const Clubs = async () => {
  const { clubs } = await getClubs();

  return (
    <div>
      <ul>
        {clubs?.map((club) => (
          <li key={club.id}>
            <Link href={`/clubs/${club.id}`}>{club.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clubs;
