let path = require("path")
let fs = require("fs")
module.exports = function (app) {
    let reservation;
    fs.readFile(path.join(__dirname , '../data/reservation.json'), 'utf8', function (err, data) {
        if (err) throw err;
        reservation = JSON.parse(data)
    });


    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    })

    app.get('/reservation', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/reservations.html'));
    })

    app.get('/table', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/table.html'));
    })

    app.post('/table', function (req, res) {
        res.send("getting table data");
    })

    app.post('/reservation', function (req, res) {
        res.send(reservation);
    })

}