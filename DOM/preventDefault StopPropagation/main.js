// var aElements =document.links;
// console.log(aElements);
// for(var i=0; i<aElements.length; ++i){
//     aElements[i].onclick =function(e){
//         if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
//             e.preventDefault();
//         }
//         console.log(e.target.href);
//     }
// }

// ex2


// var ulElements =document.querySelector('ul');
// ulElements.onmousedown=function(e){
//     e.preventDefault();
// }
// ulElements.onclick=function(e){
//     console.log(e.target)
// }


// STOP
// bỏ hành vi nổi thẻ cha
document.querySelector('div').onclick=function(e){
    console.log('DIV')
}
document.querySelector('button').onclick=function(e){
    e.stopPropagation();
    console.log('Click me')
    
}