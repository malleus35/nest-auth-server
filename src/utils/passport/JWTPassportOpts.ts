import { JwtFromRequestFunction, StrategyOptions } from 'passport-jwt';

class JWTPassportOpts implements StrategyOptions {
  jwtFromRequest: JwtFromRequestFunction;
  secretOrKey: string;
  issuer: string;
  audience: string;

  constructor(jwtFromRequest: JwtFromRequestFunction) {
    this.jwtFromRequest = jwtFromRequest;
    this.secretOrKey = process.env.JWT_SECRET_KEY;
    this.issuer = process.env.JWT_ISSUER;
    this.audience = process.env.JWT_AUDIENCE;
  }
}

export default JWTPassportOpts;
