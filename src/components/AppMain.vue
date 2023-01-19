<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    components: { ProjectCard },
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/projects",
            codeUrl: "http://127.0.0.1:8000",
            projects: []
        };
    },
    created() {
        axios.get(this.apiUrl).then((resp) => this.projects = resp.data.results);
    },
    components: { ProjectCard }
}


</script>

<template>
    <main class="container bg-light py-3">
        <h4 class="text-center fw-bold mb-4">PROJECTS</h4>

        <div class="row justify-content-center">

            <ProjectCard v-for="project in projects" :key="project.id" :project=project />

        </div>
    </main>
</template>


<style lang="scss" scoped>

</style>