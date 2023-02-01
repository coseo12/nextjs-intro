import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      server: {
        MAIN_SERVER: process.env.MAIN_SERVER,
      },
    },
    // revalidate: false,
  };
};

interface Props {
  server: string;
}

const Home: NextPage<Props> = (props) => {
  console.log(props);
  const onLogin = () => {
    console.log("login");
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "test",
        password: "1234",
      }),
    });
  };
  const onLogout = () => {
    console.log("logout");
    fetch("/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const onUser = () => {
    console.log("user");
    fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section>
      <ul>
        <li>
          <Link href="/post/abc">Go to pages/post/[pid].js</Link>
        </li>
        <li>
          <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
        </li>
      </ul>

      <button type="button" onClick={onLogin}>
        Login
      </button>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
      <button type="button" onClick={onUser}>
        User
      </button>
    </section>
  );
};

export default Home;
