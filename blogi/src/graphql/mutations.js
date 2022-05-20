/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKategoriler = /* GraphQL */ `
  mutation CreateKategoriler(
    $input: CreateKategorilerInput!
    $condition: ModelKategorilerConditionInput
  ) {
    createKategoriler(input: $input, condition: $condition) {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const updateKategoriler = /* GraphQL */ `
  mutation UpdateKategoriler(
    $input: UpdateKategorilerInput!
    $condition: ModelKategorilerConditionInput
  ) {
    updateKategoriler(input: $input, condition: $condition) {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const deleteKategoriler = /* GraphQL */ `
  mutation DeleteKategoriler(
    $input: DeleteKategorilerInput!
    $condition: ModelKategorilerConditionInput
  ) {
    deleteKategoriler(input: $input, condition: $condition) {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const createAnahtarlar = /* GraphQL */ `
  mutation CreateAnahtarlar(
    $input: CreateAnahtarlarInput!
    $condition: ModelAnahtarlarConditionInput
  ) {
    createAnahtarlar(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const updateAnahtarlar = /* GraphQL */ `
  mutation UpdateAnahtarlar(
    $input: UpdateAnahtarlarInput!
    $condition: ModelAnahtarlarConditionInput
  ) {
    updateAnahtarlar(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const deleteAnahtarlar = /* GraphQL */ `
  mutation DeleteAnahtarlar(
    $input: DeleteAnahtarlarInput!
    $condition: ModelAnahtarlarConditionInput
  ) {
    deleteAnahtarlar(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const createIcerik = /* GraphQL */ `
  mutation CreateIcerik(
    $input: CreateIcerikInput!
    $condition: ModelIcerikConditionInput
  ) {
    createIcerik(input: $input, condition: $condition) {
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
export const updateIcerik = /* GraphQL */ `
  mutation UpdateIcerik(
    $input: UpdateIcerikInput!
    $condition: ModelIcerikConditionInput
  ) {
    updateIcerik(input: $input, condition: $condition) {
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
export const deleteIcerik = /* GraphQL */ `
  mutation DeleteIcerik(
    $input: DeleteIcerikInput!
    $condition: ModelIcerikConditionInput
  ) {
    deleteIcerik(input: $input, condition: $condition) {
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