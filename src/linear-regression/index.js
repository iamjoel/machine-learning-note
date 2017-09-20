// 预测在广播中做宣传的次数和销量的关系
const ml = require('ml-regression')
const csv = require('csvtojson')
const SLR = ml.SLR // 简单线性回归
const csvFilePath = 'advertising.csv' // 数据文件
var regressionModel

var csvData = [] // 已解析的数据
var X = [] // 输入。 一般约定用大写的 X
var y = [] // 输出

const readline = require('readline') // 同时预测用户的输入值
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


csv()
  .fromFile(csvFilePath)
  .on('json', row => {
      csvData.push(row)
      X.push(parseFloat(row.Radio)) // 只支持一维的数据。。。
      y.push(parseFloat(row.Sales))
  })
  .on('done', () => {
    performRegression() 
    predictOutput()
  })

// 训练模型
function performRegression() {
    regressionModel = new SLR(X, y) // 基于训练数据来训练模型
    console.log(regressionModel.toString(3)) // 输出函数关系
}

// 应用
function predictOutput() {
    rl.question('Enter input X for prediction (Press CTRL+C to exit) : ', (answer) => {
        console.log(`At X = ${answer}, y =  ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}