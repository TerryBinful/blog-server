const Authors = require ('./Authors')

function findAuthor(args1) {
    result = Authors.find(() => Authors.id ===args1.id);
    return result
   };


var BlogData = [
    {
        id: "1",
        date: "04-10-2021",
        title: "UG reopens",
        author: findAuthor(001),
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: " ",
    },

    {
        id: "2",
        title: "UG Closes",
        author: findAuthor(002),
        banner: " ",
        likes: 0,
        unlike: 0,
        comment: " ",
    }
];

module.exports = BlogData