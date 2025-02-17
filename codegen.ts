import { loadEnv } from 'vite';
import type { CodegenConfig } from '@graphql-codegen/cli';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

const config: CodegenConfig = {
  schema: env.VITE_API_URL,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
