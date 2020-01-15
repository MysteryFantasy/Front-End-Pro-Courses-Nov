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
        container.classList.add(data.type); 
        
        for (var i = 0; i < data.items.length; i++){
            // var title = data.items[i].title;
            // console.log(title, 'title');

            // var handler = data.items[i].handler;
            // console.log(handler, 'handler');
    
            var span = document.createElement('span');
            span.classList.add('change');
            // span.classList.add(data.type);
                    
            span.innerHTML = "Title: " + data.items[i].title + " " + "Handler: " + data.items[i].handler;

            container.append(span);
        }
        
        document.body.append(container);
    }
    
createMenu();


}