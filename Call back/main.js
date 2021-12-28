var courses =[
    'js',
    'php',
    'ruby'
];
// courses.map(function(course){
//     console.log(course);
//     return `<h2>${course}</h2>`;

// });
// console.log(htmls.join(''))
var htmls = courses.map2(function(course){
    // console.log(course);
    return `<h2>${course}</h2>`;

});
console.log(htmls.join(''))