import gql from 'graphql-tag'


export const POSTS = gql`
  query{
    postCollection{
      items{
        title
        topic
        publishDate
        authorCollection{
          items{
            firstName
            lastName
            twitterUrl
            githubUrl
          }
        }
        content{
          json
        }
      }
    }
  }
`