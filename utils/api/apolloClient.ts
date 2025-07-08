// import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

// export const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: `${process.env.NEXT_PUBLIC_API_URL}`,
//     fetchOptions: {
//       next: { revalidate: 10 }, // Ensure ISR triggers correctly
//     },
//   }),
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           destinations: {
//             merge(existing, incoming) {
//               return incoming; // Prevents caching stale data
//             },
//           },
//         },
//       },
//     },
//   }),
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: "cache-and-network", // Use cache first but update if necessary
//     },
//     query: {
//       fetchPolicy: "network-only", // Always fetch fresh data for ISR
//     },
//   },
// });

// export const GraphqlQuery = gql`
//   {
//     skills(orderBy: uniqueId_ASC) {
//       uniqueId
//       skill
//       id
//       proficient
//       fieldType
//       image {
//         url
//       }
//       url
//     }
//     jobs(orderBy: from_DESC) {
//       id
//       company
//       designation
//       companyLinkedin
//       companyUrl
//       from
//       to
//       logo {
//         url
//       }
//     }
//     projects(orderBy: uniqueId_ASC) {
//       id
//       title
//       uniqueId
//       description
//       demoLink
//       githubLink
//       techStack {
//         text
//       }
//       image {
//         url
//       }
//     }
//   }
// `;
import { ApolloClient, InMemoryCache, HttpLink, gql } from "../api/apolloClient";
console.log("HYGRAPH URL:", process.env.NEXT_PUBLIC_API_URL);
console.log("HYGRAPH TOKEN:", process.env.NEXT_PUBLIC_HYGRAPH_TOKEN);
// Ensure that the environment variables are correctly set in your .env file
const httpLink = new HttpLink({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cmcrbokel013w07umbu7e7iyg/master", // Use as string, no need for `${}`
  headers: process.env.NEXT_PUBLIC_HYGRAPH_TOKEN
    ? {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      }
    : {},
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          skills: {
            merge(_, incoming) {
              return incoming;
            },
          },
          jobs: {
            merge(_, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
    query: {
      fetchPolicy: "network-only",
    },
  },
});

export const GraphqlQuery = gql`
  {
    skills(orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image {
        url
      }
      url
    }
    jobs(orderBy: from_DESC) {
      id
      company
      designation
      companyLinkedin
      companyUrl
      from
      to
      logo {
        url
      }
    }
    projects(orderBy: uniqueId_ASC) {
      id
      title
      uniqueId
      description
      demoLink
      githubLink
      techStack     # ✅ fixed line
      image {
        url
      }
    }
  }
`;
