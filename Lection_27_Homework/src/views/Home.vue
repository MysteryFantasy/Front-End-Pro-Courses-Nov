<template>
  <div class="main">
    <header>
      <slot name="header"><h3>Welcome To The Main Page!</h3></slot>
    </header>
    <div>
      <slot name="content">
      <p><button @click="filter">{{getName}}</button></p>
        <div class="products" v-for="item in productsList">
          <span>{{item.title}} - {{item.cost}}₴</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>

import sendMainAjax from '../database/ProductsBase';
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    sendMainAjax: sendMainAjax
  },
  data () {
    return {
      value: '',
      productsData: {
      },
      productsList: {
      },
    }
  
  },
  created(){
    sendMainAjax('post', 'http://localhost:3000/products', JSON.stringify(this.productsData))
      .then((resolve) => {
        this.productsList = resolve;
        // console.log('created');
      },
      (reject) => {
        console.log('not created');
    });
        
  },
  computed: {
    ...mapGetters(['getName'])
  },
  methods: {
    ...mapMutations(['setName']),
    orderedToMaxCost: function() {
      this.setName('Цена по убыванию');
      return this.productsList.sort(function(a,b) {
        return (a.cost - b.cost);
      })
    },
    orderedToMinCost: function() {
      this.setName('Цена по возрастанию');
      return this.productsList.sort(function(a,b) {
        return b.cost - a.cost;
      })
    },
    filter: function() {
      if (this.getName == 'Цена по возрастанию'){
        this.orderedToMaxCost();
      } else {
        this.orderedToMinCost();
      }
    },
  }
    
}

</script>

<style lang="scss">
.main {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 400px;
  border: 2px dashed 	#C71585;
}
.products {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 100px;
  border: 2px dashed 	#191970;
  margin: 5px;
  font-size: 17px;
  background-color: #D8BFD8;
  
}
</style>