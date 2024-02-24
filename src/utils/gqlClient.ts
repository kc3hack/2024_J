import { GraphQLClient } from "graphql-request";
const endpoint =
    import.meta.env.VITE_HASURA_GQL_ENDPOINT ?? "http://localhost:4000/v1/graphql";
const token =
    import.meta.env.VITE_HASURA_GQL_ADMIN_SECRET ;
export const buildGQLClient = () => {
  const gqlc = new GraphQLClient(endpoint, {
    headers: {
      "x-hasura-admin-secret": `${token}`,
    },
  });
  console.log(gqlc);
  return gqlc;
}
