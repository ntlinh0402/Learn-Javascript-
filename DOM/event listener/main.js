// var btn = document.getElementById('btn')
// // console.log(btn);
// //lm nhiều việc
//     btn.onclick=function(){
//         console.log('option1')
//         console.log('option2')
//         alert('option3')
    
//     }
//2.lắng nghe/hủy bỏ lắng nghe
var btn = document.getElementById('btn')
// console.log(btn);
//lm nhiều việc
setTimeout(function(){
    btn.onclick=function(){
        console.log('option1')
        console.log('option2')
        alert('option3')
    
    }
}, 3000)