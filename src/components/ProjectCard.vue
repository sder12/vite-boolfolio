<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
}
</script>


<template>

    <h5>{{ project.title }}</h5>
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
    </div>
    / Col + Card -->

</template>
<style lang="scss" scoped>

</style>