<template>
    <ul class="nav" @click="addActiveElem">
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item item-categories" @mouseover="categories=true" @mouseleave="categories=false">
            {{getCategories}}
            <ul class="sub-nav" v-if="categories">
                <li class="sub-nav-item" v-show="getCategories != 'Man'"><router-link to="/man">Man</router-link></li>
                <li class="sub-nav-item" v-show="getCategories != 'Women'"><router-link to="/women">Women</router-link></li>
            </ul>
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                categories: false
            }
        },
        computed: {
            getCategories() {
                let path = this.$route.path;

                if (path == '/man') {
                    return 'Man';
                }
                if (path == '/women') {
                    return 'Women';
                }

                return 'Categories';
            }
        }
    }
</script>
<style scoped>
    .nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        list-style: none;
        color: white;
    }
    .nav-item:first-child, .nav-item:first-child a{
        border-radius: 50px 0 0 0;
    }
    .nav-item:last-child, .nav-item:last-child a{
        border-radius: 0 50px 0 0;
    }
    .nav-item {
        width: 150px;
        height: 25px;
        background-color: #a31199;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }
    .nav-item .router-link-active {
        background-color: #6b1182;
    }

    .nav-item a {
        text-decoration: none;
        color: white;
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .item-categories {
        position: relative;
    }
    .sub-nav {
        position: absolute;
        top: 100%;
        list-style: none;
        background-color: #a31199;
        left: 0;
        right: 0;
        padding-left: 0;
    }
    .sub-nav .sub-nav-item a{
        border-radius: 0;
        padding: 10px 0;
    }
    .sub-nav {
        border-radius: 0 0 15px 15px;
    }
</style>