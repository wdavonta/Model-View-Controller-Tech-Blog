// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
// User have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// Comment belongTo Tags
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
// Post belongTo Products
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

//Post have many Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });
// User have many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
  });

module.exports = {
  Post,
  Comment,
  User
};
