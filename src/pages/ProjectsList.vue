<script>
import axios from 'axios';
import Loading from '../components/Loading.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';

export default {
    name: "ProjectsList",
    components: { ProjectCard, Loading },
    data() {
        return {
            store,
            projects: [],
            loading: false,
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
        };
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            this.loading = true;
            axios.get(this.store.apiUrl + '/api/projects', {
                params: {
                    page: page
                }
            }).then((resp) => {
                console.log(resp.data.results)
                // this.projects = resp.data.results;
                this.projects = resp.data.results.data;
                this.loading = false;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
            });
        }
    }

}


</script>

<template>
    <main class="container bg-light py-3">
        <div class="row">

            <h4 class="text-center fw-bold mb-4">PROJECTS</h4>


            <div class="d-flex justify-content-between">
                <!-- <<< Backward -->
                <button class="btn btn-dark" @click.prevent="getProjects(currentPage - 1)"
                    :class="currentPage == 1 ? 'disabled' : ''">
                    <i class="fa-solid fa-arrow-left"></i></button>
                <!-- Forward >>> -->
                <button class="btn btn-dark" @click.prevent="getProjects(currentPage + 1)"
                    :class="currentPage == lastPage ? 'disabled' : ''">

                    <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="row justify-content-center">
                <Loading v-if="loading" />
                <ProjectCard v-else v-for="project in projects" :key="project.id" :project=project />
            </div>

            <div class="text-end mt-3">
                <span> page {{ currentPage }} in {{ lastPage }}</span>
            </div>

        </div>

    </main>
</template>


<style lang="scss" scoped>

</style>