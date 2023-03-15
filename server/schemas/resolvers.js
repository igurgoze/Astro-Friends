const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
      Query: {
    users: async () => {
      return User.find();
    }
},
Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addNewHighScore: async (parent, { score, indexToAddTo }, context) => {
      if(context.user){
        try{
          const user = await User.findById(context.user._id);
          const highscores = [...user.highscore];
          if(!highscores.length){
            highscores.push(score);
          }else{
            console.log(user);
            highscores.splice(indexToAddTo, 0, score);
            if(highscores.length >= 4){
              highscores.pop();
            }
          }
          user.highscore = highscores;
          console.log(highscores);
          await user.save();
          console.log(user)
          return user;
        } catch (err){
          console.error(err);
        }
      }

      throw new AuthenticationError("Need to Be Logged in.");
    }
}
}

module.exports = resolvers;