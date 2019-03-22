/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-03-21 15:04:15 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 15:07:49
 * @function [用户获取逻辑]
 */
var Mongo = require('Mongodb-curd');
var batabaseName = 'lemon';
var collcationName = 'user';
module.exports = function(req, res, next) {
    Mongo.find(batabaseName, collcationName, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
}