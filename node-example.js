exports.handler = (event, context, callback) => {

    callback(null, "Hey " + event.name + "!");

}
