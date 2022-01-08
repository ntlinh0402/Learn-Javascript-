setTimeout(function(){
    console.log(1) //vc1
    setTimeout(function(){
        console.log(2)//vc2
        setTimeout(function(){
            console.log(3) //vc3
            setTimeout(function(){
                console.log(4) //vc4              
            },1000);
        },1000); 
    },1000);
    
},1000);
//=> callbackhell