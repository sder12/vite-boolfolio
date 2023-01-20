<script>
import axios from 'axios';
import Loading from '../components/Loading.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "ProjectsList",
    components: { ProjectCard, Loading },
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/projects",
            codeUrl: "http://127.0.0.1:8000",
            projects: [],
            loading: false,
        };
    },
    created() {
        this.loading = true;
        axios.get(this.apiUrl).then((resp) => {
            this.projects = resp.data.results;
            this.loading = false;
        });
    },
    components: { ProjectCard, Loading }
}


</script>

<template>
    <main class="container bg-light py-3">
        <h4 class="text-center fw-bold mb-4">PROJECTS</h4>

        <div class="row justify-content-center">
            <Loading v-if="loading" />
            <ProjectCard v-else v-for="project in projects" :key="project.id" :project=project />
        </div>


    </main>
</template>


<style lang="scss" scoped>

</style>