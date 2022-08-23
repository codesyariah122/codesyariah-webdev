import client from "~/plugins/contentful";

export const state = () => ({
 posts: null,
 profiles: null
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
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
       content_type: "myBlog"
     });
     if (response.items.length > 0) commit("updateProfiles", response.items);
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
};