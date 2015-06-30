var makerjs = require('makerjs');
var ventgrid = require('./ventgrid.js');

console.log(makerjs.exporter.toSVG(new ventgrid(2, 49, 37, 50)));