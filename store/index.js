import client from "~/plugins/contentful";

export const state = () => ({
 posts: null,
 allposts: null,
 profiles: null,
 comments: []
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
  },
  allComments: (state, comments) => {
    state.comments = comments
  },
  updateComments: (state, data) => {
    // state.comments.comments.push(data)
   
    // state.comments.comments.splice(data.positions, 0, data)
    console.log(data.position+1)
  }
}

export const actions = {
   async getPosts({ commit }) {
     try {
       if (!client) return;
       const response = await client.getEntries({
         content_type: "myBlog",
         'order':'-sys.createdAt'
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
       'order':'-sys.updatedAt',
       'limit': 100
     });
     if (response.items.length > 0) commit("allPosts", response.items);
   } catch (err) {
     console.error(err);
   }
  },

  async allComments({commit}, slug){
    try {
     if (!client) return;
     const response = await client.getEntries({
       content_type: "myBlog",
       'order':'-sys.updatedAt',
       'limit': 1
     });
     const comment = response.items.filter(d => d.fields.slug === slug)
     commit("allComments", comment[0].fields.comments);
   } catch (err) {
     console.error(err);
   }
  },

  async updateComments({commit}, data){
    commit('updateComments', JSON.parse(data))
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


export const getters = {
  getAllComments(state){
    return state.comments
  },
  updateNewComment(state){
    return state.comments
  }
}