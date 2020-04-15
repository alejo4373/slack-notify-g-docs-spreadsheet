function notifyOnNewEntry(event) {
  var slackWebHook = 'https://hooks.slack.com/services/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'
  var class = event.values[2]
  var name = event.values[3];
  var question = event.values[7];
  if (class === '5.1') {
    var payload = {
      text: name + " *needs help with:* " + question
    };
    var options = {
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
      
    }
    var res = UrlFetchApp.fetch(slackWebHook, options);
  }
}
