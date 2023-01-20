import { reactive } from "vue";

export const store = reactive({
    // apiUrl: "http://127.0.0.1:8000/api/",
    apiUrlAll: "http://127.0.0.1:8000/api/projects",
    apiUrl: "http://127.0.0.1:8000",
    navLinks: [
        {
            path: "/",
            name: 'home',
            text: 'Home',
        },
        {
            path: "/projects",
            name: 'projects',
            text: 'Project',
        },
        {
            path: "/about-us",
            name: 'about',
            text: 'About us',
        }
    ]
});
