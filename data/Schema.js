const {gql} =  require ("apollo-server")
const BlogData = require('./Blogs')


const typeDefs = gql`
# main blog details- table
  type Blog {
    # Blog fields
        id: ID!
        title: String!
        author: Author!
        # display picture for banner
        banner: String!
        likes: Int
        unlike: Int
        comment: Comment
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