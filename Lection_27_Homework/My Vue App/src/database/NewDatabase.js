function sendNewAjax(method, url, data) {
    return new Promise((resolve, reject) => {
        var newXHR = new XMLHttpRequest();
        newXHR.open(method, url, true);
        newXHR.send(data);

        newXHR.onreadystatechange = function() {
            if(newXHR.readyState == 4) {
                let newUser = JSON.parse(newXHR.responseText);
                // console.log(newUser, 'newUser');
                if(newXHR.status == 200) {
                    resolve(newUser);
                } else {
                    reject();
                }
            }   
        }

    });
};

export default sendNewAjax;