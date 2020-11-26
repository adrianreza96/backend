var express = require('express');
var querystring = require('querystring');
var http = require('http');

exports.findAll = (req, res) => {  
    
    var data = querystring.stringify({
        ItemNumber: '14-126-472',
        RecommendItem: '',
        BestSellerItemList: '',
        IsVATPrice: true
    });
    
    console.log("searching!!");

    var options = {
        host: 'www.newegg.com',
        path: '/product/api/ProductRealtime?'+data,
        method: 'GET',
    };
    // https://www.newegg.com/product/api/ProductRealtime?ItemNumber=14-126-472&RecommendItem=&BestSellerItemList=&IsVATPrice=true
    
    var httpreq = http.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
          console.log("body: " + chunk);
        });
        response.on('end', function() {
          res.send('ok');
        })
        console.log(response);
    });
    
    httpreq.write(data);
    httpreq.end();
};

exports.findByProductId = (req, res) => {
    res.send('ok');
};

exports.deleteAll = (req, res) => {
  
};
