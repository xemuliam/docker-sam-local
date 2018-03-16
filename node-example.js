exports.handler = (event, context, callback) => {
	var output = "";

    if (event.requestContext) {

		var payload = "";

		params = event.pathParameters;

		if (event.body) {
			payload = event.body;
            const body = JSON.parse(payload);
            for(key in body) {
                params[key] = body[key];
            }
        }

		switch(event.requestContext.httpMethod) {

			case 'GET':
				output = "Hey " + params.name + "!\n";
				break;
					
			case 'POST':
				output = "Hey " + params.name + "!\n"
						+ "\n"
						+ "Your payload:\n"
						+ payload + "\n";
				break;
		}
		
		callback(null, {
			statusCode: 200,
			body: output
		})

	} else {
		output = "Hey " + event.name + "!";
		callback(null, output);
	}
}
