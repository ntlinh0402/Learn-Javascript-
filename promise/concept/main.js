//tạo ra 1 promise
//1.pending: ko thành công ko thất bại
//2. fulfilled
//3. reject 
var promise = new Promise(
    //excutor 
    function(resolve, reject){
        //logic
        //thanh cong => resolve
        //that bai > reject
        resolve([{
            id:1,
            name:'js'
        }]);
        // reject();
    }
);
//Promise: object contructor
promise
    .then(function(courses){
       console.log(courses) 
    })
    .catch(function(){
        console.log('failure') 

    })//bắt lỗi
    .finally(function(){
        console.log('done') 

    });
    // promise: sử lí bất đồng bộ
    // khác phục tình trạng callback hell
    // để tạo ra cần new.... sau đó