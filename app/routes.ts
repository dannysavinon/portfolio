import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("resume", "routes/resume.tsx"),
    route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;
