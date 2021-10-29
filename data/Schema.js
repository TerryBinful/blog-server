const {gql} =  require ("apollo-server")



const typeDefs = gql`
# main blog details- table
  type Blog {
    # Blog fields
        id: ID!
        date: String!
        title: String!
        author: Author!
        # blog data goes here
        text: String!
        # display picture for banner
        banner: String!
        likes: Int
        unlike: Int
        comment: [Comment]
        }

# Authors description - table
    type Author {
    # Author Fields
        id: ID!
        name: String!
        age: Int
        photo: String
        about: String
    }

#comment details go hear -tabele
    type Comment {
    # Comment fields
        id: ID!
        blogID: String!
        commentor: String!
        comments: String!
 }


 # Queries
  type Query{
    blogsAll: [Blog]
    blogsByID (id:ID): Blog
  }
 
`

module.exports = typeDefs