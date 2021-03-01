<template>
    <h1>{{text}}</h1>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Sorry. No found.'
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
        font-style: italic;
    }
</style>