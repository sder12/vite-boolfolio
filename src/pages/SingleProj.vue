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
                        console.log(this.project);
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
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h2 class="my-4">{{ project.title }}</h2>
                <h4 class="text-success" v-if="project.type">{{ project.type.name }}</h4>
                <h4 v-else> --- </h4>
            </div>

            <div class="col-6 text-center" id="cover_img" v-if="project.cover_img">
                <img :src="`${store.apiUrl}/storage/${project.cover_img}`" :alt="project.title">
            </div>
            <div class="col-6 text-center" id="cover_img" v-else>
                NO IMG FOUND
            </div>

            <div class="col-6 pe-5 mt-4">
                <p v-show="project.description"> {{ project.description }}</p>
                <span v-show="project.creation_year"> <strong>created in {{ project.creation_year }}</strong> </span>
            </div>

            <div class="col-12 text-center">
                <span v-if="project.technologies == []">
                    ---
                </span>
                <span v-else v-for="(tech, value) in project.technologies" :key="value" class="text-primary mx-3">
                    #{{ tech.name }}
                </span>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cover_img img {
    width: 50%;
}
</style>