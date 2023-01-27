import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(">>", context.req.headers.cookie);

  return {
    props: {
      server: {
        MAIN_SERVER: process.env.MAIN_SERVER,
      },
    },
    // revalidate: false,
  };
};
const Abc: NextPage = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  return <main>{pid}: abc</main>;
};

export default Abc;
