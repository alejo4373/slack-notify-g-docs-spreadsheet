const onNewRow = (event) => {
  let slackWebHook = 'SLACK_WEB_HOOK_URL';
  let [timeStamp, name, questionDescription, domain] = event.values
  let payload = {
    text: `*${name}* needs help with *${domain}*, more specifically: *${questionDescription}*`
  };

  let options = {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload)

  }
  UrlFetchApp.fetch(slackWebHook, options);
}
