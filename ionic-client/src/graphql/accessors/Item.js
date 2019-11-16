import { gql } from 'apollo-boost'

export default {
  getItemsByList: gql`
    query ($listId: ID!) {
      getItemsByList(listId: $listId) {
        id
        from
        to
        message
        link
      }
    }
  `,
  getNewItemsByUser: gql`
    query ($userId: ID!) {
      getNewItemsByUser(userId: $userId) {
        id
        from
        to
        message
        link
      }
    }
  `,
}