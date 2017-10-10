// y = 3x + b
function makeTestData() {
  var start = 1
  var step = 1
  var res = []
  for(var i = 0; i < 50; i++) {
    res.push(start + step * i)
  }
}

// 损失函数
function loseFn(predict, real) {
  return (predict - real) * (predict - real)
}

// 激活函数

// 反向传播
// (wx - b)^2  = w^2 * x^2 - 2wbx + b^2
// 对 w 求导，2x - b^2 
// 对 b 求导，w - b^2 
// r = r - detla * 导数值
const detla = .1
var w = 1 // 初始值
var b = 0 // 初始值
function fixFn(type, x) {
  if(type === 'w') {
    w -= (2 * x - b * b)
  } else {
    b -= ((w*x)*(w*x) - 2 * w + 2 * b)
  }
}

// 成本函数
function costFn(predicts, reals) {
  var res 
  predicts.map((predict, i))
}

function run () {
  var testData = 
}
