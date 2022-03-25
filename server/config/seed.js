const db = require('./connection');
const { User, Post } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    first: 'Ignacio',
    last: 'Diaz',
    email: 'test@mail.com',
    password: 'password'
  });

  console.log('users seeded');

  await Post.deleteMany();

  const posts = await Post.create(
    {
      subject: 'About GraphQL...'
    }
  );

  console.log('products seeded');


  process.exit();
});