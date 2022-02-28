exports.handler = (event, _context, callback) => {

  if ('url' in event.queryStringParameters === false) {
    console.error("parameter 'url' is necessary!!");
    return;
  }

  const url = event.queryStringParameters.url;
  const options = {'url': encodeURI(url)}
  const ogs = require("open-graph-scraper");
  ogs(options).then(function(data) {
    const metadata = data.data;
    console.log(metadata);
    let ogpData = {};
    ogpData['siteName'] = metadata.ogSiteName;
    ogpData['title'] = metadata.ogTitle;
    ogpData['description'] = metadata.ogDescription;
    if (Array.isArray(metadata.ogImage)) {
      const jpgUrl = metadata.ogImage.find((image) => image.url.endsWith('.jpg') || image.url.endsWith('.jpeg')).url
      ogpData['image'] = jpgUrl
    } else {
      ogpData['image'] = metadata.ogImage.url;
    }
    console.log(JSON.stringify(ogpData));
    callback(null, {
      statusCode: 200,
      "headers": { "Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(ogpData)
    });
  }).catch(function(error) {
      console.error(error);
  });

};