const BlogData = require('./Authors')
const Authors = require ('./Blogs')

const resolvers = {
    Query: {
        blogsAll: () => BlogData,
        blogsByID: (parent, args) => BlogData.find(blog => BlogData.title ===args.title)
    }
}

module.exports = resolvers