import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsList from "./pages/ProjectsList.vue";
import SingleProj from "./pages/SingleProj.vue"
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about-us",
            name: "about",
            component: AboutUs,
        },
        //PROJECTS
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList,
        },
        {
            path: "/projects/:slug",
            name: "single-proj",
            component: SingleProj,
        },

        // NOT FOUND
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        }
    ],
});

export { router };