const mongoose = require("mongoose");

const config = require("./config");

const mongooseOptions = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
};

mongoose
	.connect(
		`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
		mongooseOptions
	)
	.then((db) => console.log("DB is connected to: ", db.connection.name))
	.catch((err) => console.log(err));
