const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const record = require('./db/models/record');

require('dotenv').config();


app.get('/', async (req, res) => {
    const get_records = await record.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 5
    });

    return res.render('index', { records: get_records });
})

app.post('/record/create/', async (req, res) => {
    try {
        const new_record = await record.create({title: req.body['record-title'], content: req.body['record-content']});
    }
    catch (error) {
        console.log(error);
    }

    return res.redirect('/');
})

app.post('/record/delete/:id', async (req, res) => {
    const item_id = req.params.id;

    try {
        const delete_record = await record.destroy({
            where: {
                id: item_id
            }
        })
    }
    catch (error) {
        console.log(error);
    }

    return res.redirect('/');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
