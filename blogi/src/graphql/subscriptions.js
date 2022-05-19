/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories {
    onCreateCategories {
      id
      name
      active
      createdAt
      updatedAt
      postsCategoryId
    }
  }
`;
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories {
    onUpdateCategories {
      id
      name
      active
      createdAt
      updatedAt
      postsCategoryId
    }
  }
`;
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories {
    onDeleteCategories {
      id
      name
      active
      createdAt
      updatedAt
      postsCategoryId
    }
  }
`;
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
      id
      tagName
      createdAt
      updatedAt
      postsTagsId
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
      id
      tagName
      createdAt
      updatedAt
      postsTagsId
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
      id
      tagName
      createdAt
      updatedAt
      postsTagsId
    }
  }
`;
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts {
    onCreatePosts {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts {
    onUpdatePosts {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts {
    onDeletePosts {
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
