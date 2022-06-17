import HomePage from '../containers/HomePage';

export default function Home() {
  return <HomePage />;
}

// Exemplo do portfolio
// import { GetStaticProps } from 'next';

// import HomePage from '../containers/HomePage';
// import { getAllProjects } from '../data/projects/get-all-projects';
// import { ProjectData } from '../domain/projects/project';

// export type HomeProps = {
//   projects: ProjectData[];
// };

// export default function Home({ projects }: HomeProps) {
//   return <HomePage projects={projects} />;
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const projects = await getAllProjects('_sort=id:desc&_start=0&_limit=6');

//   return {
//     props: { projects },
//   };
// };
