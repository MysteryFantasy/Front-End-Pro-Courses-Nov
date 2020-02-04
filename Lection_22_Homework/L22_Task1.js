window.onload = function(){
    let promise = new Promise(function(resolve, reject){
        console.log(0);
        setTimeout(function(){
            if(confirm()){
                resolve();
            } else{
                reject();
            }
        }, 2000);
    });

    promise.then(function(){
        console.log(1, 'resolve 1');
    },

    function() {
        console.log(2, 'reject 1');
        return;
    })

    .then(function(){
        console.log(3, 'resolve 2');
        return Promise.reject();
    },

    function(){
        console.log(4, 'reject 2');
    })

    .then(function(){
        console.log(5, 'resolve 3');
    },

    function(){
        console.log(6, 'reject 3');
    });

}