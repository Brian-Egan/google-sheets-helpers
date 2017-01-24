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

// Returns the first row from an array (useful when combined with the =FILTER function. Sort of a 'whole row VLOOKUP'.
function first(arr, optionalCols) {
  if (isArr(arr)) {
    // Now to determine if it is a 2D array... If it is, we need to put it inside another array so that it stays a ROW and doesn't return muliple COLUMNS (Sheets puts 1D array entries on separate rows)
    if (isArr(arr[0])) {
      var optionalCols = optionalCols == undefined ? arr[0].length : optionalCols
      return [arr[0].slice(0,optionalCols)];
    } else {
      return arr[0];
    }
  } else {
    return [""];
  }
}

// When passing in an 'Array' of rows, Google Sheets passes in an Object. So we just check if it's one of those two types.
function isArr(arrOrObject) {
  if ((typeof(arrOrObject) == "array") || (typeof(arrOrObject) == "object")) {
    return true;
  } else {
    return false;
  }
}
    
  


