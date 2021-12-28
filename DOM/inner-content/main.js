var headingElement=document.querySelector('.heading')
// headingElement.textContent="new heading"
// console.log(headingElement.textContent)
console.log(headingElement.innerText)
console.log(headingElement.textContent)
headingElement.textContent='<i>new heading</i>'
//textContent trả lại tất cả textnote
//innerText trả lại giống như những j hiển thị trên màn hình
//khi nằm trong dom thì style, script cx chỉ đc coi là 1 thẻ tag, textnote,..
//innerText thực chất là thuộc tính là element note
//textContent từ elementnote , text note