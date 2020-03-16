function sendAjax(method, url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(data);

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                let response = JSON.parse(xhr.responseText);
                // console.log(response, 'responce');
                if(xhr.status == 200) {
                    resolve(response);
                } else {
                    reject();
                }
            }   
        }

    });
};

export default sendAjax;