import gql from 'graphql-tag'


export const POSTS = gql`
  query{
    postCollection{
      items{
        sys{
          id
        }
        title
        topic
        publishDate
        slug
        authorCollection{
          items{
            sys{
              id
            }
            firstName
            lastName
            twitterHandle
            githubHandle
          }
        }
      }
    }
  }
`
export const POST = gql`
  query postCollection($where:PostFilter){
    postCollection(limit: 1, where:$where) {
      items{
          sys{
            id
          }
          title
          topic
          publishDate
          slug
          authorCollection{
            items{
              sys{
                id
              }
              firstName
              lastName
              twitterHandle
              githubHandle
              profileImageUrl
            }
          }
          content{
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  fileName
                  title
                  description
                  url
                }
              }
            }
          }
        }
    }
  }
`