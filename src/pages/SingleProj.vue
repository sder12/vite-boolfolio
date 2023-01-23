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
                    // console.log(resp.data.success);
                    // true quando slug esiste false quando non c'è
                    if (resp.data.success) {
                        this.project = resp.data.project;
                    } else {
                        //rindirizza alla pagina 404
                        this.$router.push({ name: "not-found" });
                    };
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