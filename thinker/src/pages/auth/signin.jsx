import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <button key={provider.id} onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  return { props: { providers: await getProviders() } };
}
