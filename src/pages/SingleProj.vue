<script>
import axios from 'axios';
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
            // console.log(this.$route.params.slug, this.store.apiUrl)
            axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`)
                .then(resp => {
                    console.log(resp.data.project)
                })
        }
    }
}
</script>

<template>
    <h2>single project</h2>
</template>

<style lang="scss" scoped>

</style>