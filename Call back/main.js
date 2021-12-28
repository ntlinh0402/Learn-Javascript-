Array.prototype.map2 =function(callback){
    var arrayLength = this.length;
    for (var i=0; i < arrayLength; ++i){
        callback(this[i], i);
    }
}
var courses =[
    'js',
    'php',
    'ruby'
];
var htmls = courses.map2(function(course){
    // console.log(index,course)
    return `<h2>${course}</h2>`

});
// courses.map(function(course){
//     console.log(course);
//     return `<h2>${course}</h2>`;

// });
// console.log(htmls.join(''))

// var htmls = courses.map2(function(course){
//     // console.log(course);
//     return `<h2>${course}</h2>`;

// });
// console.log(htmls.join(''))