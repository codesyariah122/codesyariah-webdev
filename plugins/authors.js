export default async ({ store }) => {  
	await store.dispatch("getAuthors"); 
};