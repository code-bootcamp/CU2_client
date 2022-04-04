import { gql } from "@apollo/client";

export const FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL = gql`
  query fetchotherBlogorderbylikeAll {
    fetchotherBlogorderbylikeAll {
      id
      url
      blogcategorytag {
        tag
      }
      title
      contents
      user {
        nickname
      }
      createAt
      updatedat
      like
    }
  }
`;

export const FETCH_OTHER_STACK_ORDER_BY_LIKE = gql`
  query fetchotherStackorderbylike {
    fetchotherStackorderbylike {
      like
      title
      contents
      user {
        nickname
      }
      stacktag {
        tag
      }
    }
  }
`;

export const FETCH_COACH_USER_LIST = gql`
  query fetchCoachUserList {
    fetchCoachUserList {
      name
      score
      coachProfile {
        orgName
        orgType
        department
        job
        image
      }
      coachtag {
        tag
      }
    }
  }
`;

export const FETCH_COACH_QUESTION_LIST = gql`
  query fetchCoachQuestionList {
    fetchCoachQuestionList {
      id
      title
      contents
      fromUser {
        nickname
      }
      toCoach {
        id
        name
      }
    }
  }
`;

export const FETCH_RECOMMEND_COLUM_LIST = gql`
  query fetchRecommendColumnList {
    fetchRecommendColumnList {
      id
      title
      contents
      user {
        name
        role
        coachProfile {
          id
        }
      }
    }
  }
`;
