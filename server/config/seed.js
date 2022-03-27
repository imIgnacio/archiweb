const db = require('./connection');
const { User, Post } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  const user1 = await User.create(
    {
      first: 'Ignacio',
      last: 'Diaz',
      email: 'test@mail.com',
      password: 'password'
    }
  );

  const user2 = await User.create(
    {
      first: 'Josefa',
      last: 'Ramos',
      email: 'test@test.com',
      password: 'pass1234'
    }
  )

  let users = [user1, user2];

  console.log(users);
  console.log('users seeded');

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      subject: 'About GraphQL...',
      content: 'Nostrud culpa nisi ad ut ad. Cupidatat cillum tempor adipisicing sunt est dolore ullamco officia nostrud sint ad pariatur pariatur. Laborum nisi exercitation dolor ipsum eiusmod laborum ut enim. Ipsum aliquip exercitation deserunt cillum consectetur velit eiusmod occaecat quis aute occaecat. Est cupidatat sunt id elit est nulla eu eu dolore amet ad consectetur exercitation. Cillum nulla eu laboris eu id velit sit do do cillum officia. Veniam deserunt labore deserunt nostrud nostrud.',
      creator: users[0]._id
    },
    {
      subject: 'Building NFTs',
      content: 'Qui et excepteur incididunt ex proident pariatur.',
      creator: users[1]._id
    },
    {
      subject: 'Building Crypto',
      content: 'Mollit deserunt non esse pariatur est consectetur mollit. Et aliqua id aute adipisicing dolor incididunt. Proident fugiat incididunt anim qui est exercitation eiusmod non ipsum duis et. Exercitation occaecat excepteur anim consectetur anim magna in velit magna esse. Eu id incididunt dolor minim adipisicing esse eu. In et incididunt enim est occaecat anim reprehenderit magna culpa ex pariatur. In laboris aute do deserunt quis cupidatat consectetur ex.',
      creator: users[0]._id
    }
  ]);

  console.log(posts);
  console.log('products seeded');


  process.exit();
});