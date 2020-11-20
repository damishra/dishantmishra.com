import { ApolloProvider, useQuery } from '@apollo/client';
import { client, GET_PROJECTS } from '../data/github';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return 'Loading projects...';
  if (error) return `Error: ${error.message}`;
  return <ApolloProvider client={client}></ApolloProvider>;
};

export default Projects;
