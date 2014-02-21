'use strict';

var htto = require('http');
var bl = require('bl');
var async = require('async');


var urls = process.argv.slice(2);

var getHttp = function getHttp(url) {
    return function (collector) {
        htto.get(url, function (response) {
            response.pipe(bl(function (err, data) {
                if (err) return collector(err);
                collector(null, data.toString());
            }));
        });
    };
};

async.series(urls.map(function (url) {
    return getHttp(url)
}), function (err, results) {
    results.forEach(function (item) {
        console.log(item);
    });
});


