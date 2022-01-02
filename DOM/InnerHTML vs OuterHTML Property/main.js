var boxElement=document.querySelector('.box');
// boxElement.innerText='<h1>Heading</h1>';
// boxElement.innerHTML='<h1 title="Heading">Heading</h1>';
//khi đc thêm thì h1 trở thành element trong dom
// innerText và textContent chỉ thêm đc text
console.log(boxElement.innerHTML);
//lấy cả thẻ cha: outerHTML
console.log(boxElement.outerHTML);

//innerHTML:them element node và tesxt node attribute vào trong element
console.log(document.querySelector('h1').innerText)



///OUTER