import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const   session  = useSession();
  if (session.status === "authenticated") {
    return (
      <>
       <pre>{JSON.stringify(session.data, null, 2)}</pre>
        <p>Logged in as {session.data.user.name}</p>
        <img src={session.data.user.image} alt="" style={{ width: "100px" }} />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
