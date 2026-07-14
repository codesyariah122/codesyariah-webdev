import client from "~/plugins/contentful";

const profileOverrides = {
  phone: "6288222668778",
  city: {
    lat: -7.0503005,
    lon: 107.595406,
  },
  address:
    "Komplek Bumi Sasak Dua Blok B3 / No.5 Jl. Kapten Sarwono RT. 004 / Rw.07, Banjaran Wetan 40377.",
};

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
      if (response.items.length > 0) {
        const profiles = response.items.map((profile, index) => {
          if (index !== 0) return profile;

          return {
            ...profile,
            fields: {
              ...profile.fields,
              ...profileOverrides,
              city: {
                ...(profile.fields.city || {}),
                ...profileOverrides.city,
              },
            },
          };
        });

        commit("updateProfiles", profiles);
      }
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
