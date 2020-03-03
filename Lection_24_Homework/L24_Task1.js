Vue.component('diagrammItem', {
    props: {
        foo: Object,
        className: String,
    },

    template:
    `
        <div :class="['column', className]"
        :style="{display: 'flex','flexFlow': 'column', 'justifyContent': 'spaceAround', 'margin': '5px', 'backgroundColor': foo.color, 'height': foo.value +'px', 'border': '2px solid black', 'width': '100px'}">
            {{foo.name}}
        </div>
        
    `
});

Vue.component('Diagrams', {
    props: {
        newValue: '',
    },
    data() {
        return {
            diagrammBlock: [
                {name: '1', color: 'red', value: '100'},
                {name: '2', color: 'orange', value: '150'},
                {name: '3', color: 'yellow', value: '200'},
                {name: '4', color: 'green', value: '250'},
                {name: '5', color: 'lightblue', value: '300'},
                {name: '6', color: 'blue', value: '100'},
                {name: '7', color: 'violet', value: '150'}
            ],
        }

    },

    template: 
    `
        <div>
            <diagrammItem 
                :className="'block_array'"
                v-for="(item, $index) in diagrammBlock" :key="$index" 
                :foo="item"
            />
        </div>
    `
});

new Vue({
    el:'#diag',
    data: {
      name: "Diagramm",
      height: "",
    }
});