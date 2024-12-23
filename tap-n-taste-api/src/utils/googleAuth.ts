import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
<<<<<<< HEAD
import User from '../models/user.model';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
=======
import { v4 as uuidv4 } from 'uuid';
import User from '../models/user.model'; // Adjust the path based on your project structure
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback', // updated URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('Google Profile:', profile); // Log the profile object
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
        let user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
<<<<<<< HEAD
            password: null,
            role: 'User',
            status: 'verified',
=======
            password: 'gauthUserPassword',
            role: 'User',
            phone: profile.emails[0].value || uuidv4(),
            status: profile.emails[0].verified ? 'verified' : 'pending',
            profileImage: profile.photos[0]?.value,
            GAccessToken: accessToken,
            GRefreshToken: refreshToken,
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
          });
        }
        done(null, user);
      } catch (error) {
<<<<<<< HEAD
=======
        console.error('Error in GoogleStrategy:', error);
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
        done(error, null);
      }
    }
  )
);
<<<<<<< HEAD
=======
export default passport;
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
