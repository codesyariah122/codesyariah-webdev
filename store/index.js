import client from "~/plugins/contentful";

export const state = () => ({
 posts: null,
 allposts: null,
 profiles: null
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  allPosts: (state, posts) => {
    state.allposts = posts
  },
  updateProfiles: (state, profiles) => {
    state.profiles = profiles
  }
}

export const actions = {
   async getPosts({ commit }) {
     try {
       if (!client) return;
       const response = await client.getEntries({
         content_type: "myBlog",
         'order':'-sys.createdAt',
         'limit': 3
       });
       if (response.items.length > 0) commit("updatePosts", response.items);
     } catch (err) {
       console.error(err);
     }
   },

   async allPosts({commit}){
    try {
     if (!client) return;
     const response = await client.getEntries({
       content_type: "myBlog",
       'order':'-sys.createdAt',
       'limit': 100
     });
     console.log(response)
     if (response.items.length > 0) commit("allPosts", response.items);
   } catch (err) {
     console.error(err);
   }
  },

  async getProfiles({commit}){
    try{
      if(!client) return;
      const response = await client.getEntries({
        content_type: "profile"
      })
      if (response.items.length > 0) commit("updateProfiles", response.items);
    } catch (err) {
     console.error(err);
   }
  }
}