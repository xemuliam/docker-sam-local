'use strict';

exports.handler = (event, context, callback) => {

    console.log('LOG: Name is ' + event.name);
    callback(null, "Hello " + event.name);

}
