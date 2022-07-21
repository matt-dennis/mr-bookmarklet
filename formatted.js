// generated min.js with
// uglifyjs formatted.js -o min.js -c -m --toplevel
// make sure to have it start with `javascript:` so the bookmarklet will run
var base = "&merge_request[target_branch]=";
var ticket = window.location.href.split("2F")[1];
console.log(ticket);
window.location.href +=
  window.location.href.indexOf("feature") > 0
    ? base + "release%2F" + ticket
    : window.location.href.indexOf("uat") > 0
    ? base + "uat"
    : window.location.href.indexOf("qa") > 0
    ? base + "qa"
    : window.location.href.indexOf("release") > 0
    ? base + "main"
    : "";
