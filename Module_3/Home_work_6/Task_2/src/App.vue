<template>
  <shop-header/>
  <shop-nav/>
  <router-view/>
  <shop-footer/>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';
 
  export default {
    components: {
      'shop-header': Header,
      'shop-nav': Navigation,
      'shop-footer': Footer
    },
    created: function () {
            fetch('https://fakestoreapi.com/products/category/men%20clothing')
            .then((response)=>{
              return response.json();
            }).then((data)=>{
              this.$store.state.products = this.$store.state.products.concat(data);
            });
  
            fetch('https://fakestoreapi.com/products/category/women%20clothing')
            .then((response)=>{
              return response.json();
            }).then((data)=>{
              console.log(data);
              this.$store.state.products = this.$store.state.products.concat(data);
            });
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    position: relative;
    min-height: 100vh;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
</style>
