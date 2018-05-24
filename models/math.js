function calc(num) {
    //因数计算
    var arr = [];
    for (var i = 0;i<num;i++){
        num%i==0?arr.push(i):'';
    }
    return arr;
}
exports.calc = calc;