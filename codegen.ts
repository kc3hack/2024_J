import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config.js";

console.log(process.env);

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_GQL_ENDPOINT ?? "http://localhost:4000/v1/graphql"]: {
        headers: {
          "x-hasura-admin-secret":
            process.env.HASURA_GQL_ADMIN_SECRET ?? "no-secret",
        },
      },
    },
  ],
  documents: "gql/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
