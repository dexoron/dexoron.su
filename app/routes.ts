import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('/skill', 'routes/skill.tsx'),
] satisfies RouteConfig;
