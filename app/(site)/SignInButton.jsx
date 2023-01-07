"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name}
            className="inline-block rounded-full"
            width={48}
            height={48}
          />
        ) : (
          <span>no image</span>
        )}
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SignInButton