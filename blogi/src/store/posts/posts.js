import { createIcerik } from "../../graphql/mutations"

import { API, graphqlOperation } from "aws-amplify"

import { createIcerik as createIcerikMutation } from "../../graphql/mutations";

import { getIcerik as getIcerikQuery } from "../../graphql/queries"

import { listIceriks as listIcerikQuery } from "../../graphql/queries"


export const postInfo = {
    namespaced: true,
    state: {

        postss: null,
        categories: null,
        tags: null
    },
    mutations: {
        setPosts(state, payload) {
            state.postss = payload;
        }




    },
    actions: {

        async createIcerik({ dispatch }, newPost) {
            try {
                await API.graphql(graphqlOperation(createIcerikMutation, { input: newPost }))
                dispatch("getIcerikData");
                console.log("kaydedildi")
            } catch (error) {
                console.error("Createpost ", error)
            }

        },


        async getIcerik(_, postid) {

            return await API.graphql(graphqlOperation(getIcerikQuery, {
                id: postid
            }))

        },
        async getIcerikData({ commit }) {

            const postData = await API.graphql(graphqlOperation(listIcerikQuery));
            console.log(postData)
            commit("setPosts", postData.data.listIceriks.items)

        }



    },
    getters: {
        postss: (state) => state.postss

    }
}