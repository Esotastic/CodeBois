const prompt = require('prompt')

const schema = {
	properties: {
		aliceScores: {
			pattern: /(\b((100)|[1-9]\d?)\b)[\s](\b((100)|[1-9]\d?)\b)[\s](\b((100)|[1-9]\d?)\b)/,
			message: 'Scores must be between 1-100',
			required: true
		},
		bobScores: {
			pattern: /(\b((100)|[1-9]\d?)\b)[\s](\b((100)|[1-9]\d?)\b)[\s](\b((100)|[1-9]\d?)\b)/,
			message: 'Scores must be between 1-100',
			required: true
		}
	}
}

prompt.start()

prompt.get(schema, (err, result) => {
	let aliceTotal = 0
	let bobTotal   = 0

	console.log('Scores received');

	const aScores = result.aliceScores.split(" ")
	const bScores = result.bobScores.split(" ")

	aScores.forEach((score, index) => {
		switch(true) {
			case score > bScores[index]:
				aliceTotal += 1
				break
			case score < bScores[index]:
				bobTotal += 1
				break
			default:
		}

	})

	console.log("Alice received a total of :", aliceTotal)
	console.log("Bod received a total of : ", bobTotal)

	if(aliceTotal === bobTotal) {
		console.log("Alice and Bob have tied.")
		return
	}

	if(aliceTotal > bobTotal) {
		console.log("Alice won.")
	} else {
		console.log("Bob won.")
	}
})
