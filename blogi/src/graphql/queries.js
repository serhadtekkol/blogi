/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKategoriler = /* GraphQL */ `
  query GetKategoriler($id: ID!) {
    getKategoriler(id: $id) {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const listKategorilers = /* GraphQL */ `
  query ListKategorilers(
    $filter: ModelKategorilerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKategorilers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        active
        createdAt
        updatedAt
        icerikCategoryId
      }
      nextToken
    }
  }
`;
export const getAnahtarlar = /* GraphQL */ `
  query GetAnahtarlar($id: ID!) {
    getAnahtarlar(id: $id) {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const listAnahtarlars = /* GraphQL */ `
  query ListAnahtarlars(
    $filter: ModelAnahtarlarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnahtarlars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagName
        createdAt
        updatedAt
        icerikTagsId
      }
      nextToken
    }
  }
`;
export const getIcerik = /* GraphQL */ `
  query GetIcerik($id: ID!) {
    getIcerik(id: $id) {
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
          icerikCategoryId
        }
        nextToken
      }
      tags {
        items {
          id
          tagName
          createdAt
          updatedAt
          icerikTagsId
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
export const listIceriks = /* GraphQL */ `
  query ListIceriks(
    $filter: ModelIcerikFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIceriks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            icerikCategoryId
          }
          nextToken
        }
        tags {
          items {
            id
            tagName
            createdAt
            updatedAt
            icerikTagsId
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
