

function getItem(https, obj, cb){
  https.get('https://www.'+ obj.url +'.com/api/webmasters/search/?category='+  obj.cat +'&page='+ obj.page, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      cb(true, null);
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', function(chunk){
       rawData += chunk;
     });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        cb(false, parsedData.video);
      } catch (e) {
        cb(true, null);
      }
    });
  }).on('error', (e) => {
    cb(true, null);
  });

}

module.exports = getItem;
