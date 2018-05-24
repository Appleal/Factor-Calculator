var fs = require("fs");
//文件是否存在
function isExist(n,callback) {
    fs.stat("./data/"+n+".txt",function (err,stats) {
       var result = stats===undefined?false:true;
       callback(result)
    })
}
//暴露出去
exports.isExist = isExist;
//单元检测
// isExist(555,function (data) {
//     console.log(data)
// })
//写入文件
function writeArray(n,arr,callback) {
    fs.writeFile("./data/"+n+".txt",JSON.stringify(arr),function (err) {
        if (err) {
            callback(false);
        }
      callback(true);

    })
}
//单元测试
// writeArray(333,[1,3,4],function (data) {
//     console.log(data)
// })
//暴露
exports.writeArray = writeArray;
//读取文件
function readArray(n, callback) {
    fs.readFile("./data/"+n+".txt",function (err,data) {
        if (err) {
            callback(false);
        }
       callback(JSON.parse(data))
    })
}
exports.readArray = readArray;
//单元测试
// readArray(333,function (data) {
//     console.log(data)
// })