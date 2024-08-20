import { createClient } from 'contentful';

console.log('Contentful Space:', process.env.CONTENTFUL_SPACE);
console.log('Contentful Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);
console.log("Ok")

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
});


export default client;