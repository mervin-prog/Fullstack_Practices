const express=require("express")

const app = express();
const port = 3000;


function logRequest(req, res, next) {
    console.log(`Received ${req.method} request to ${req.path}`);
    next();
}

app.use(logRequest);
app.get('/', (req, res) => {
    res.send('Hello AOP!');
});

function measureResponseTime(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request to ${req.path} completed in ${duration} ms`);
    });
    next();
}
app.use('/users', measureResponseTime); //only user route is measured.

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John' }, { id: 2, name: 'Alex' }]);
});

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
});
