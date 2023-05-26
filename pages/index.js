import Head from "next/head";
import "@styles/Home.module.css";
import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import repositories from '@constants/github';
export default function Home() {
  return (
    <ContainerBlock
      title="James Hussey - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}
// export const getServerSideProps = async () => {
//   let token = process.env.GITHUB_AUTH_TOKEN;
//   const repositories = await getLatestRepos(userData, token);
//   console.log(repositories);
//   return {
//     props: {
//       repositories,
//     },
//   };
// };
