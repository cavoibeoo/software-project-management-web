"use strict";
import GoogleStrategy from "passport-google-oauth20";
import config from "../config/environment.js";
import passport from "passport";
import User from "../models/user.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: config.googleAuthConfig.clientId,
            clientSecret: config.googleAuthConfig.clientSecret,
            callbackURL: `${config.beURL}/api/auth/google/callback`,
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value });
                const hasGoogleProvider = user?.federatedCredentials.some(
                    (credential) => credential.provider === "google"
                );
                if (user) {
                    if (!hasGoogleProvider) {
                        user.federatedCredentials.push({
                            _id: profile.id,
                            provider: "google",
                        });
                        await user.save();
                    }
                } else {
                    user = new User({
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        federatedCredentials: [{ _id: profile.id, provider: "google" }],
                        isVerified: true,
                        avatar: profile.photos[0].value,
                    });
                    await user.save();
                }
                return done(null, user);
            } catch (error) {
                console.error("Error in Google OAuth callback:", error);
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user ID into session
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user); // Deserialize user object
    });
});
