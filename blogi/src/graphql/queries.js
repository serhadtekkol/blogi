/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      name
      active
      createdAt
      updatedAt
      postsCategoryId
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        active
        createdAt
        updatedAt
        postsCategoryId
      }
      nextToken
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      tagName
      createdAt
      updatedAt
      postsTagsId
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagName
        createdAt
        updatedAt
        postsTagsId
      }
      nextToken
    }
  }
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      title
      content
      category {
        items {
          id
          name
          active
          createdAt
          updatedAt
          postsCategoryId
        }
        nextToken
      }
      tags {
        items {
          id
          tagName
          createdAt
          updatedAt
          postsTagsId
        }
        nextToken
      }
      createdAt
      author
      active
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        category {
          items {
            id
            name
            active
            createdAt
            updatedAt
            postsCategoryId
          }
          nextToken
        }
        tags {
          items {
            id
            tagName
            createdAt
            updatedAt
            postsTagsId
          }
          nextToken
        }
        createdAt
        author
        active
        updatedAt
      }
      nextToken
    }
  }
`;
