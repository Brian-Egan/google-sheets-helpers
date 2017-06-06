// Always make sure to push/pull from Github on changes. Only way to sync between sheets!

function encode(value) {
  return encodeURIComponent(value);
}

function decode(value) {
  return decodeURIComponent(value);
}

function getHTTPStatus(url) {
  return UrlFetchApp.fetch(url, {muteHttpExceptions: true}).getResponseCode();
}

function notBlank(cell) {
  // Blank cells are treated as empty strings. Anything which is not a string cannot be blank.
  switch (typeof(cell)) {
    case "string":
      return cell.length > 0 ? true : false;
    default: 
      return true;
  };
}

// Alias this because I always forget to capitalize!
function notblank(cell) {
  return notBlank(cell);
}


