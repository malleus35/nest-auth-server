import passport from 'passport';
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { User } from 'src/User/user.entity';
import { Repository } from 'typeorm';
import JWTPassportOpts from './JWTPassportOpts';

const jwtFromRequest: JwtFromRequestFunction = ExtractJwt.fromAuthHeaderAsBearerToken();
const opts = new JWTPassportOpts(jwtFromRequest);
const usersRepository = new Repository<User>();

passport.use(
  new Strategy(opts, (jwt_payload, done) => {
    usersRepository.findOne(jwt_payload.idx);
  }),
);
