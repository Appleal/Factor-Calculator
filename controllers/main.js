var file = require("../models/file");
var math = require("../models/math");
exports.showIndex = function (req,res) {
    res.render("index")
}
exports.showCha = function (req, res) {
    var num = req.params.num;
    file.isExist(num,function (exist) {
        if (exist) {
            file.readArray(num,function (arr) {
                res.render("cha",{
                    num:num,
                    result:arr
                })
            })
        } else {
            var arr = math.calc(num);
            file.writeArray(num,arr,function (result) {
                res.render("cha",{
                    num:num,
                    result:arr
                })
            })
        }
    })
}