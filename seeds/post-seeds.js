const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;