const express = require('express');

const app = express();

// Make the server/public folder available to any who wants them
app.use(express.static('./server/public'));

app.listen(4192, () => {
    console.log('Server is live!');
});

console.log('in server.js');