import passport from 'passport';
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import JWTPassportOpts from './JWTPassportOpts';

const jwtFromRequest: JwtFromRequestFunction = ExtractJwt.fromAuthHeaderAsBearerToken();
const opts = new JWTPassportOpts(jwtFromRequest);

passport.use(
  new Strategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.sub }, (err: Error, user: User) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }),
);
