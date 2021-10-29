const {ApolloServer, gql} =  require ("apollo-server")
// const BlogData = require('./src/BlogData')
// const Schema = require('./src/SchemaDef')
// const Resolvers = require('./src/Resolvers')


const BlogData = [
    {
        id: "1",
        title: "UG reopens",
        author: "Author",
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: " ",
    },

    {
        id: "2",
        title: "UG Closes",
        author: "Author",
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: " ",
    }
];


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
        details: String
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

const resolvers = {
    Query: {
        blogsAll: () => BlogData,
        blogsByID: (parent, args) => BlogData.find(blog => BlogData.title ===args.title)
    }
}


const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers})
server.listen(3310).then(({url, port}) => {
    console.log(`
    🚀  Server is running!
    ⚓  Deployed on ${url}
    🔉  Listening on port ${port}
    `)
}).catch(err => console.log(err.message));