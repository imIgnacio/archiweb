const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        posts: async () => {
            return await Post.find();
        },
        post: async (parent, { _id }) => {
            return await Post.findById(_id);
        },
        user: async (parent, args, context) => {
            if(context.user){
                const user = await User.findById(context.user._id);
                return user;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if(context.user){
                const post = await Post.create(args);
                await User.findByIdAndUpdate(context.user._id, { $push: {posts: post} });
                
                return post;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, args, context) => {
            if(context.user._id){
                return await User.findOneAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        }
    }
};

module.exports = resolvers;