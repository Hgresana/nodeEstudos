import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
    {
        method: 'GET',
        path: '/products',
        controller: (request, response) => {
            return response.end('List of products');
        }
    },
    {
        method: 'POST',
        path: '/products',
        controller: (request, response) => {
            return response.writeHead(201).end(`Product created: ${JSON.stringify(request.body)}`);
        }
    },
    {
        method: 'DELETE',
        path: '/products/:id',
        controller: (request, response) => {
            return response.end('Product deleted w id: ' + request.params.id);
        }
    }
].map((route) => ({
    ...route, 
    path: parseRoutePath(route.path),
}))