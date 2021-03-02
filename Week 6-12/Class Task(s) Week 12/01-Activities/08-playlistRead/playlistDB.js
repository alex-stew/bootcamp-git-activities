const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'KARNUSrise10',
    database: 'playlist_db',
});

const afterConnection = () => {
    connection.query('SELECT * FROM songs WHERE genre = "Metalcore"', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
});