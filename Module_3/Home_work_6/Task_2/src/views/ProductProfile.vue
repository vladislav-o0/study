<template>
    <div class="container">
        <h2>{{title}}</h2>
        <img :src="img" alt="image">
        <p>{{descr}}</p>
        <p><b>{{price}}$</b></p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'descr', 'price', 'img']
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-flow: column;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 10px;
        margin-top: 20px;
        text-align: center;
    }
    img {
        width: 60%;
    }
</style>