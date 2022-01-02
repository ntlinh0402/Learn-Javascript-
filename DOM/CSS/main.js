var boxElement=document.querySelector('.box')
// console.log(boxElement.style)
// boxElement.style.width = '100px'
// boxElement.style.height ="200px"
// boxElement.style.backgroundColor='red'
Object.assign(boxElement.style, {
    width:'200px',
    backgroundColor:'green',
    height:'100px',
});
console.log(boxElement.style.backgroundColor)