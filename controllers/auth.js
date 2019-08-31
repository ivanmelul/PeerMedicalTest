//TODO: Logic for Token
var fixed_token = "5CD4ED173E1C95FE763B753A297D5";

exports.isAuthenticated = function(req, res, next) {
	if(req.headers.token == '5CD4ED173E1C95FE763B753A297D5'){
		return next();
	}else{
		var err = new Error('Not authorized');
		err.status = 400;
		return next(err);
	}
};