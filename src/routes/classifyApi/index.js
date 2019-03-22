/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-03-21 15:35:21 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 20:56:37
 * @function [查找自定义分类的逻辑] 
 */
const Mongo = require('mongodb-curd');
const dName = 'lemon';

module.exports = {
    //获取分类icon图标
    costom: function(req, res, next) {
        Mongo.find(dName, 'costom', function(result) {
            if (result) {
                res.send({ code: 1, data: result })
            } else {
                res.send({ code: 0, msg: 'error' })
            }
        })
    },
    //添加自定义分类
    classify: function(req, res, next) {
        let { icon, title, type, common } = req.body;
        if (!icon || !title || !type || !common) {
            return res.send({ code: 2, msg: '参数不完整' })
        }
        Mongo.insert(dName, 'classify', req.body, function(result) {
            if (result) {
                res.send({ code: 1, data: result })
            } else {
                res.send({ code: 0, msg: 'error' })
            }
        })
    },
    //查找带有icon图标和id
    getclassify: function(req, res, next) {
        let { type, common } = req.body
        Mongo.find(dName, 'classify', { common: { $in: ['y', common] }, type: type }, function(result) {
            if (result) {
                res.send({ code: 1, data: result })
            } else {
                res.send({ code: 0, msg: 'error' })
            }
        })
    }
}