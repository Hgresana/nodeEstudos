import { routes } from "../routes";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path === route.url
    }
)

if (route) {
    return route.controller(request, response)
}

    return response.writeHead(404).end(`${method} ${url} not found`);

}