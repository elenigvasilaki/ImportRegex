/**
 * Scrapes a URL using Regex.
 *
 * @param {url} input The URL to scrape.
 * @return The output fields from the URL.
 * @customfunction
 */
function importRegex(url, regexInput_1, regexInput_2, regexInput_3) {
  var output_1= '';
  var output_2= '';
  var output_3= '';
  var fetchedUrl = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
  if (fetchedUrl) {
    var html = fetchedUrl.getContentText();
    if (html.length && regexInput_1.length && regexInput_2.length && regexInput_3.length) {
      output_1 = html.match(new RegExp(regexInput_1, 'g'));
      output_2 = html.match(new RegExp(regexInput_2, 'g'));
      output_3 = html.match(new RegExp(regexInput_3, 'g'));
    }
  }
  // Grace period to not overload
  Utilities.sleep(1000);
  return [output_1, output_2, output_3];
}
