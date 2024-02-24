import { GraphQLClient } from "graphql-request";
const endpoint =
  process.env.HASURA_GQL_ENDPOINT ?? "http://localhost:4000/v1/graphql";
const token: string | undefined = process.env.HASURA_GQL_ADMIN_SECRET;
export const getGQLClient = () => buildGQLClient(token);
export const buildGQLClient = (cred?: string) => {
  const jwt = cred ? { Authorization: `Bearer ${cred}` } : undefined;
  return new GraphQLClient(endpoint, {
    headers: jwt,
  });
};
