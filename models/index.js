const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/antigua"

const configOptions = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
	.then(() => console.log('MongoDb successfully connected...'))
	.catch(err => console.log(`MonogoDB connection error: ${err}`)
	)

	module.exports = {
		Puzzle: require('./puzzle')
	}