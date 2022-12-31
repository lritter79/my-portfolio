import React from "react";
import { portfolioArray } from "../../data/portfolioArray";
import Project from "../../components/Project";

const project = ({ project }) => {
  return (
    <>
      <Project project={project}></Project>
    </>
  );
};

export default React.memo(project);

//make it async because we have to fetch all ids externally, but not in this case
export const getStaticProps = async (context) => {
  const project = portfolioArray[context.params.id];

  return { props: { project } };
};

export const getStaticPaths = async () => {
  const ids = portfolioArray.map((proj) => proj.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
