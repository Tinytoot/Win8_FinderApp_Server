var mongoose = require('mongoose');
// get free mongo db @ www.mongolab.com
var path = 'mongodb://MogoOpenData:BGRbXFdZBtpfeImWsGFyBPZi5omPu6KzmD9OI794ztw-@ds045107.mongolab.com:45107/MogoOpenData';
module.exports = {
	_db: null,
	init: function() {
		if(!module.exports._db) {

			module.exports._db = mongoose.connect(path);

		}
		return module.exports._db;
	}
}