//ex: input
// var inputValue
// var inputElement=document.querySelector('input[type="text"]')
// inputElement.oninput=function(e){
//     inputValue=e.target.value;
//     // console.log(e.target.value)
// }

//checkbox
// var inputElement=document.querySelector('checkbox')
// inputElement.onchange=function(e){
//     // inputValue=e.target.value;
//     console.log(e.target.checked);
// }

//select
// var inputElement=document.querySelector('select')
// inputElement.onchange=function(e){
//     console.log(e.target.value);
// }
// var inputElement=document.querySelector('input[type="text"]')
// inputElement.onkeyup=function(e){
//     console.log(e.which);
//     switch(e.which){
//         case 27:console.log('exit')
//         break;
//     }
// }
document.onkeydown=function(e){
    switch(e.which){
        case 27:
            console.log('exit');
            break;
        case 13:
            console.log('send');
            break;
    }
}