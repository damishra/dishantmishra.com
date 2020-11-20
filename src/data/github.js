import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${process.env.AUTH_TOKEN}`,
  },
});

export const GET_PROJECTS = gql`
  {
    user(login: "damishra") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            openGraphImageUrl
            id
            description
            nameWithOwner
            createdAt
            isFork
            parent {
              nameWithOwner
              url
            }
            primaryLanguage {
              name
            }
            languages(first: 9) {
              nodes {
                ... on Language {
                  color
                  name
                }
              }
            }
            licenseInfo {
              name
              nickname
              url
              permissions {
                description
                key
                label
              }
              limitations {
                description
                key
                label
              }
              conditions {
                description
                key
                label
              }
              pseudoLicense
            }
          }
        }
      }
    }
  }
`;
