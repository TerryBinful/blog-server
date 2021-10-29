const Authors = require ('./Authors');
const Comments = require ('./Comments')

function findAuthor(authorId) {
    return Authors.find((author) => author.id === authorId);
};

   function findComments(blogId) {
    return Comments.filter((comment) => comment.blogID === blogId);
   };



var BlogData = [
    {
        id: "1",
        date: "04-10-2021",
        title: "UG reopens",
        author: findAuthor("001"), //Peggy Oppong
        text: " ",
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: findComments(1), //All for this blog
    },

    {
        id: "2",
        date: "04-10-2021",
        title: "UG Closes",
        author: findAuthor("002"), //Ama Atta Aidoo
        text:" ",
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: findComments(2), //All for this blog,
    }
];

module.exports = BlogData