<template>
    <div>
        <router-link 
        :to="{name: 'Profile',
             params: {
               product: product.title,
                 title: product.title,
                 descr: product.description,
                 price: product.price,
                   img: product.image
                    }}">
        <h4>{{product.title}}</h4>
        <img :src="product.image">
        <p>Цена: {{product.price}}$</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style scoped>
    div {
        width: 33.33%;
        box-sizing: border-box;
        padding: 30px;
    }
    a {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        text-decoration: none;
        border-radius: 50px;
    }
    a:hover {
        box-shadow: 0px 0px 8px 3px #86118e;
    }
    img {
        width: 40%;
    }
    h4 {
        text-align: center;
        padding: 0 28px;
    }
</style>