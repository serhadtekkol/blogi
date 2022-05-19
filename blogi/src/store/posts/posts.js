import { createPosts } from "../../graphql/mutations"

import { API, graphqlOperation } from "aws-amplify"

import { createPosts as createPostMutation } from "../../graphql/mutations";

import { getPosts as getPostQuery } from "../../graphql/queries"

import { listPosts as listPostQuery } from "../../graphql/queries"


export const postInfo = {
    namespaced: true,
    state: {

        posts: null,
        categories: null,
        tags: null
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        }




    },
    actions: {

        async createPosts({ dispatch }, newPost) {
            try {
                await API.graphql(graphqlOperation(createPostMutation, { input: newPost }))
                dispatch("getPostsData");
                console.log("kaydedildi")
            } catch (error) {
                console.error("Createpost ", error)
            }

        },


        async getPosts(_, postid) {

            return await API.graphql(graphqlOperation(getPostQuery, {
                id: postid
            }))

        },
        async getPostsData({ commit }) {

            const postData = await API.graphql(graphqlOperation(listPostQuery));
            console.log(postData)
            commit("setPosts", postData.data.listPosts.items)

        }



    },
    getters: {
        posts: (state) => state.posts

    }
}