// Yêu cầu
// Get element có ID app và lưu vào biến appElement
// Get element có ID first-heading lưu vào biến firstHeadingElement
// Get element có ID app-body lưu vào biến appBodyElement
// Get element có ID second-heading lưu vào biến secondHeadingElement
// Làm bài tập tại đây
var appElement = document.getElementById('app')
console.log('appElement');
var firstHeadingElement = document.getElementById('first-heading')
console.log('firstHeadingElement');
var appBodyElement = document.getElementById('app-body')
console.log('appBodyElement');
var secondHeadingElement = document.getElementById('second-heading')
console.log('secondtHeadingElement');
//Yêu cầu
// Get elements box và lưu vào biến boxHTMLCollection
// Lấy element box thứ nhất lưu vào biến box1Element
// Lấy element box thứ hai lưu vào biến box2Element
// Get tất cả li và lưu vào biến allItemElements
// Get tất cả li là con của box thứ nhất và lưu vào biến box1ItemElements
// Get tất cả li là con của box thứ hai và lưu vào biến box2ItemElements
// Làm bài tập tại đây
var boxHTMLCollection = document.getElementsByClassName('box');
var box1Element = document.querySelector('.container .box:first-child');
var box2Element = document.querySelector('.container .box:nth-child(2)');
var allItemElements = document.getElementsByTagName('li');
var box1ItemElements = document.querySelectorAll('.container .box:first-child li');
var box2ItemElements = document.querySelectorAll('.container .box:nth-child(2) li');


// Yêu cầu
// Lấy h1 element và lưu vào biến h1Element
// Lấy h2 element và lưu vào biến h2Element
// Lấy h3 element và lưu vào biến h3Element
// Làm bài tập tại đây
var h1Element = document.querySelector('h1')
var h2Element = document.querySelector('h2')
var h3Element = document.querySelector('h3')

// Get element box thứ hai lưu vào biến box2Element
var box2Element = document.querySelector('.box:nth-child(2)')