import http from 'node:http';
import { jsonHandler } from './middlewares/jsonHandler.js';

const server = http.createServer( async (request, response) => {
    await jsonHandler(request, response);
    const { method, url } = request;

    if(method === 'GET' && url === '/products') {
        return response.end('List of products');
    }

    if(method === 'POST' && url === '/products') {
           
        return response.writeHead(201).end(`Product created: ${JSON.stringify(request.body)}`);
    }

    return response.writeHead(404).end(`${method} ${url} not found`);
})

server.listen(3333)