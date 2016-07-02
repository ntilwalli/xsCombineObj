import xs from 'xstream'

export default function combineObj(obj) {
  var sources = [];
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key.replace(/\$$/, ''));
      sources.push(obj[key]);
    }
  }


  return xs.combine(...sources).map(function () {
    var args = arguments[0]
    var argsLength = args.length;

    var combination = {};
    for (var i = argsLength - 1; i >= 0; i--) {
      combination[keys[i]] = args[i];
    }

    return combination;
  })
}
