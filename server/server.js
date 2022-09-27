const express = require('express');

const app = express();

app.listen(4192, () => {
    console.log('Server is live!');
});

console.log('in server.js');