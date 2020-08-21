const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./server/src/server/models/mongoose/user.model');

const cookieExtractor = req => {
	let token = null;
	if(req && req.cookies) {
		token = req.cookies["acces_token"];
	}
	return token;
}

// authorization
passport.use(new JwtStrategy({
	jwtFromRequest : cookieExtractor,
	secretOrKey : "NoobCoder"
}, (payload, done) => {
	User.findById({_id : payload.sub}, (err, user)=>{
		if(err)
			return done(err, false);
		if(user)
			return done(null, user);
		else
			return done(null, false);
	})
}))

//authenticated local stategy using username and password
passport.use(new LocalStrategy((profile, password, done) => {
	User.findOne({username}, (err, user)=>{
		// something wrong with database
		if(err) 
			return done(err);
		// no use exists
		if(!user)
			return done(null, false)
		// check if password is correct
		user.comparePassword(password, done);
	})
}));