window.onload = function(){
    data = { 
        name: 'menu', 
        type: 'column', //row || column
        items: [
            {
                title: 'title 1',
                handler: 'ActionAdd'
            },
            {
                title: 'title 2',
                handler: 'ActionSaveAs'
            },
            {
                title: 'title 3',
                handler: 'ActionExit'
            }

        ]
    }


    function createMenu () {
        var container = document.createElement('div');
        // container.classList.add(data.type); 
        
        for (var i = 0; i < data.items.length; i++){
            var m = data.items[i].title;
            console.log(m, 'm');
    
            var span = document.createElement('span');
            span.classList.add('change');
            span.classList.add(data.type);
                    
            span.innerHTML = "Title: " + m;
            
            // span.innerHTML = "Title: " + data.items[i].title;
            // console.log(span.innerHTML, 'span.innerHTML');
            container.append(span);
        }
        document.body.append(container);
    }
    
createMenu(data);


}