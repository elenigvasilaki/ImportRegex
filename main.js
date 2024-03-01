/**
 * Scrapes a URL using Regex.
 *
 * @param {url} input The URL to scrape.
 * @return The output fields from the URL.
 * @customfunction
 */
function importRegex(url, ...regexInputs) {
  var outputs = [];

  try {
    var fetchedUrl = UrlFetchApp.fetch(url, { muteHttpExceptions: true });

    if (fetchedUrl.getResponseCode() === 200) {
      var html = fetchedUrl.getContentText();

      if (html.length && regexInputs.length) {
        outputs = regexInputs.map(regex => html.match(new RegExp(regex, 'g')) || []);
      }
    } else {
      Logger.log('HTTP request failed with response code:', fetchedUrl.getResponseCode());
    }
  } catch (error) {
    Logger.log('Error:', error);
  }

  // Grace period to not overload
  Utilities.sleep(1000);

  return outputs;
}
