<template>
    <div class="header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Магазин'
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 19px;
    }
    .header {
        height: 100px;
        background: linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;
        position: relative;
        z-index: -1;
        margin-bottom: -20px;
    }
    .header:after {
        content: "";
        display: block;
        height: 50px;
        position: absolute;
        bottom: -25px;
        background-color: #fff;
        left: 0;
        right: 0;
        border-radius: 50px;
        box-shadow: inset 0px 12px 12px -14px rgb(75, 75, 75);
    }
    h1 {
        color: white;
        font-family: Arial;
    }
</style>