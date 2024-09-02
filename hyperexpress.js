import HyperExpress from 'hyper-express';
const webserver = new HyperExpress.Server();

webserver.get('/', (req, res) => {
    res.send('Hello World!');
});


webserver.listen(3000, () => {
    console.log('Server started on port 3000');
});