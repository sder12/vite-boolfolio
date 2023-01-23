<script>
import { store } from '../store';
export default {
    name: 'SingleProj',
    data() {
        return {
            store
        }
    },
    created() {
        this.getSinglePoject();
    },
    methods: {
        getSinglePoject() {
            console.log(this.$route.params.slug, this.store.apiUrl)
        }
    }
}
</script>

<template>
    <h2>single project</h2>
</template>

<style lang="scss" scoped>

</style>