const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const routes = require('./routes');
const { setWebSocket } = require('./webSocket');

const app = express();
const server = http.Server(app);

setWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-av8zu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);