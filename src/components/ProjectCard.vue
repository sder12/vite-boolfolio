<script>

export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
    data() {
        return {
            codeUrl: "http://127.0.0.1:8000",
        }
    },

    computed: {
        descriptionPreview() {
            if (this.project.description && this.project.description.length > 100) {
                return this.project.description.substr(0, 100) + ' ...';
            }
            return this.project.description;
        }
    },
}
</script>


<template>

    <!-- <h5>{{ project.title }}</h5> -->
    <!-- Col + Card -->
    <div class="col-11 col-md-6 col-lg-3 d-flex justify-content-center mt-3">
        <div class="card" style="width: 18rem;">

            <img v-if="project.cover_img" class="w-100" :src="`${codeUrl}/storage/${project.cover_img}`"
                :alt="project.title">
            <img v-else src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                :alt="project.title">

            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p v-show="project.description" class="card-text fw-light">
                    {{ descriptionPreview }}
                </p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item text-success fw-semibold">
                    {{ project.type ? project.type.name : '---' }}
                </li>

            </ul>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-primary">
                    <span v-for="tech in project.technologies" :key="tech.id">
                        #{{ tech.name }}
                    </span>
                </li>
            </ul>

            <div class="card-body text-end">
                <router-link class="card-link btn btn-light"
                    :to="{ name: 'single-proj', params: { slug: project.slug } }">
                    Detail
                </router-link>
            </div>
        </div>
    </div>
    <!-- / Col + Card -->

</template>
<style lang="scss" scoped>

</style>