
module.exports = function routes() {
	this.root('pages#main');
	this.resource('pages');

	this.match('test', 'pages#test', { via: 'get'});
	this.match('users', 'user#userGetAll', { via: ['get', 'options']});
	this.match('users/:id', 'user#userGetByID', { via: 'get'});

	this.match('profiles', 'profile#profileGetAll', { via: ['get', 'options']});
	this.match('profiles/:id', 'profile#profileGetByID', { via: 'get'});

	this.match('message', 'message#messageGetAll', { via: ['get', 'options']});
	this.match('message/:id', 'message#messageGetByID', { via: 'get'});

	this.match('register', 'register#registerUser', { via: ['get', 'post']});

}
