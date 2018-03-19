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

		output = {
			GET: () => "Hey " + params.name + "!\n" ,
			POST: () => "Hey " + params['name'] + "!\n"
					+ "\n"
					+ "Your payload:\n"
					+ payload + "\n" 
		}[event.requestContext.httpMethod]();
		
		callback(null, {
			statusCode: 200,
			body: output
		})

	} else {
		output = "Hey " + event.name + "!";
		callback(null, output);
	}
}
