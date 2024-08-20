import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NUXT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NUXT_APP_CONTENTFUL_ENVIRONMENT || 'master'
});

export default client;