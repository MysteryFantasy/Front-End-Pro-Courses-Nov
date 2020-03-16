function sendMainAjax(method, url, data) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open(method, url, true);
        request.send(data);

        request.onreadystatechange = function() {
            if(request.readyState == 4) {
                let productList = JSON.parse(request.responseText);
                // console.log(productList, 'productList');
                if(request.status == 200) {
                    resolve(productList);
                } else {
                    reject();
                }
            }   
        }

    });
};

export default sendMainAjax;