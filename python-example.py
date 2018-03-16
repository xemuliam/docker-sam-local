import json

def handler(event, context):
	output = ""

	if 'requestContext' in event:

		payload = "";

		params = event['pathParameters']
		if event['body']:
			payload = event['body']
			body = json.loads(event['body'])
			for key in body:
				params[key] = body[key]

		output = {
			'GET': "Hey " + params['name'] + "!\n",
			'POST': "Hey " + params['name'] + "!\n" \
					+ "\n" \
					+ "Your payload:\n" \
					+ payload + "\n"
		}[event['requestContext']['httpMethod']]

		return { \
			"statusCode": 200, \
			"body": output \
			}
	else:
		output = "Hey " + event['name'] + "!"
		return output
