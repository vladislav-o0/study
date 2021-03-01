<template>
    <div class="footer">
        Copyright ©
    </div>
</template>

<script>
    export default {

}
</script>

<style scoped>
    .footer {
        height: 60px;
        background: linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        padding-top: 35px;
        text-align: center;
        color: white;
    }
    .footer:after {
        content: '';
        display: block;
        height: 50px;
        position: absolute;
        top: -25px;
        background-color: #fff;
        left: 0;
        right: 0;
        border-radius: 50px;
        box-shadow: inset 0px -12px 12px -14px rgb(75, 75, 75);
    }
</style>