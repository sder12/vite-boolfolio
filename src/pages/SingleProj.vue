<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProj',
    data() {
        return {
            store,
            project: {},
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
                    this.project = resp.data.project;
                    console.log('project', this.project.title);
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