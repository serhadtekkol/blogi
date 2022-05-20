/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKategoriler = /* GraphQL */ `
  subscription OnCreateKategoriler {
    onCreateKategoriler {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const onUpdateKategoriler = /* GraphQL */ `
  subscription OnUpdateKategoriler {
    onUpdateKategoriler {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const onDeleteKategoriler = /* GraphQL */ `
  subscription OnDeleteKategoriler {
    onDeleteKategoriler {
      id
      name
      active
      createdAt
      updatedAt
      icerikCategoryId
    }
  }
`;
export const onCreateAnahtarlar = /* GraphQL */ `
  subscription OnCreateAnahtarlar {
    onCreateAnahtarlar {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const onUpdateAnahtarlar = /* GraphQL */ `
  subscription OnUpdateAnahtarlar {
    onUpdateAnahtarlar {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const onDeleteAnahtarlar = /* GraphQL */ `
  subscription OnDeleteAnahtarlar {
    onDeleteAnahtarlar {
      id
      tagName
      createdAt
      updatedAt
      icerikTagsId
    }
  }
`;
export const onCreateIcerik = /* GraphQL */ `
  subscription OnCreateIcerik {
    onCreateIcerik {
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
export const onUpdateIcerik = /* GraphQL */ `
  subscription OnUpdateIcerik {
    onUpdateIcerik {
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
export const onDeleteIcerik = /* GraphQL */ `
  subscription OnDeleteIcerik {
    onDeleteIcerik {
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
