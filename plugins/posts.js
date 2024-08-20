export default async ({ store }) => {  
	await store.dispatch("getPosts")
	await store.dispatch("allPosts")
}