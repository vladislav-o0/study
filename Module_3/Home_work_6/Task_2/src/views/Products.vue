<template>
    <div class="products">
        <shop-product v-for="product in getCategoriesProducts" :product="product" :key="product.id"/>
    </div>
</template>

<script>
    import Product from '@/components/Product.vue';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {}
        },
        components: {
            'shop-product': Product
        },
        computed: {
            ...mapGetters(['manProducts', 'womenProducts']),
            getCategoriesProducts() {
                let pathMan = '/man';
                let pathWomen = '/women';
                
                if (this.$route.path == pathMan) {
                    return this.manProducts;
                } 
                
                else if (this.$route.path == pathWomen) {
                    return this.womenProducts;
                }

                else {
                    return this.$store.state.products;
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .products {
        display: flex;
        flex-flow: row wrap;
    }
</style>