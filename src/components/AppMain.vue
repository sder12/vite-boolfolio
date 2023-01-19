<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/projects",
            codeUrl: "http://127.0.0.1:8000",
            projects: []
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) =>
            this.projects = resp.data.results
        )
    }

}


</script>

<template>
    <main class="bg-primary">
        <h2>Main</h2>
        <ul>
            <li v-for="project in projects">
                {{ project.title }}
            </li>
        </ul>
    </main>
</template>


<style lang="scss" scoped>

</style>