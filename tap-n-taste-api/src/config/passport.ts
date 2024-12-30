import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.model';

// Ensure environment variables are set
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.error('Missing Google OAuth credentials in environment variables.');
    process.exit(1); // Exit if credentials are missing
}

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                if (!profile.emails || !profile.emails[0]?.value) {
                    return done(new Error('No email associated with this Google account'), null);
                }

                let existingUser = await User.findOne({ googleId: profile.id });
                if (!existingUser) {
                    existingUser = await User.findOne({ email: profile.emails[0].value });
                }

                if (existingUser) {
                    return done(null, existingUser);
                }

                // Create new user if not found
                const newUser = new User({
                    email: profile.emails[0].value,
                    password: '', // No password for Google users
                    googleId: profile.id,
                    name: profile.displayName,
                });

                const savedUser = await newUser.save();
                done(null, savedUser);
            } catch (error) {
                console.error('Error during Google OAuth callback:', error);
                done(error, null);
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        console.error('Error during user deserialization:', error);
        done(error, null);
    }
});

export default passport;
