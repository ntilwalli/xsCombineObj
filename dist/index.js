'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineObj;

var _xstream = require('xstream');

var _xstream2 = _interopRequireDefault(_xstream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combineObj(obj) {
  var sources = [];
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key.replace(/\$$/, ''));
      sources.push(obj[key]);
    }
  }

  return _xstream2.default.combine.apply(_xstream2.default, sources).map(function () {
    var args = arguments[0];
    var argsLength = args.length;

    var combination = {};
    for (var i = argsLength - 1; i >= 0; i--) {
      combination[keys[i]] = args[i];
    }

    return combination;
  });
}
