const {ApolloServer, gql} =  require ("apollo-server")
const typeDefs = require ('./data/Schema')
const BlogData = require('./data/Blogs')


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