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

            <ProjectCard v-for="project in projects" :key="project.id" />


            <!-- Col + Card -->
            <!-- <div class="col-11 col-md-6 col-lg-4 d-flex justify-content-center mt-3" v-for="project in projects"
                :key="project.id">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">
                            Description
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Technology</li>
                        <li class="list-group-item">Type</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Show</a>
                    </div>
                </div>
            </div> -->
            <!-- / Col + Card -->
        </div>
    </main>
</template>


<style lang="scss" scoped>

</style>