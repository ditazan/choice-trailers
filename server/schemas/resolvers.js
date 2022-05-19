const { ApolloServerPluginCacheControl } = require("apollo-server-core");
const { AuthenticationError } = require("apollo-server-express");
const { Trailer, User, Filter } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    filters: async () => {
      return await Filter.find();
    },

    trailers: async (parent, { filter, name }) => {
      const params = {};

      if (filter) {
        params.filter = filter;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Trailer.find(params).populate("filter");
    },

    trailer: async (paprent, { _id }) => {
      return await Trailer.findById(_id).populate("filter");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateTrailer: async (parent, { _id, quantity }) => {
      return await Trailer.findByIdAndUpdate(_id, { new: true });
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

        // if (!confirmed){
        //     throw new AuthenticationError('Please confirm your email');
        // }

        const token = signToken(user);

        return { token, user };
    }
  },
};
