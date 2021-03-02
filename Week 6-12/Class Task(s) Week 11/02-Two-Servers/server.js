// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT1 = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
const handleRequestOne = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`The only place you find success before work is in the dictionary.`);
};

const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It's not the size of the dog in the fight, but the size of the fight in the dog.`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http.createServer(handleRequestOne);
const server2 = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT1}`);
});

server2.listen(PORT2, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT2}`);
});