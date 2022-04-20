const myOriginalLibrary = (a, b) => {
  return console.log(a + b);
}

// 誰でも使えるようにエクスポートしておく。
module.exports = myOriginalLibrary;