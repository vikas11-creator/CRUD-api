const express = require('express');
const router = express.Router();
const knex = require('../../model/dbHelper')


router.get('/', async (req, res) => {
    console.log('data');
    await knex('todo_list').select().then(d => {//table name here in knex() having database todo in knex.js file
        res.status(200).json({
            d,
            message: "Data fetched successfully",
        });
    }).catch(e => console.log('error' + e));

});


router.get('/:id', async (req, res) => {
    console.log('data');
    await knex('todo_list').where('id', '=', req.params.id).select().then(d => {//table name here in knex() having database todo in knex.js file
        console.log(d);
        res.status(200).json({
            d,
            message: "Data fetched successfully",
        });
    }).catch(e => console.log('error' + e));

});


router.put('/:id', async (req, res) => {
    console.log('data');
    await knex('todo_list').where('id', '=', req.params.id).
    update({name: req.body.name}).select().then(d => {//table name here in knex() having database todo in knex.js file
        console.log(d);
        res.status(200).json({
            d,
            message: "Data updated successfully",
        });
    }).catch(e => console.log('error' + e));

});

router.post('/:id', async (req, res) => {//post dynamic data jo bhi body me bejenge {
//     "name": "vijendra",
//   }
    console.log('data');
    console.log(req.params.id);
    console.log(req.body);

    await knex('todo_list').insert({name: req.body.name}).where('id', '=', req.params.id).then(d => {//table name here in knex() having database todo in knex.js file
        console.log(req.body);
        console.log(req.params.id);

        res.status(200).json({
            d,
            message: "Data added successfully",
        });
    }).catch(e => console.log('error' + e));

});



router.post('/:id', async (req, res) => {//post static data
    console.log('data');

    await knex('todo_list').insert({name: 'Slaughterhouse'}).where('id', '=', req.params.id).then(d => {//table name here in knex() having database todo in knex.js file
        console.log(d);
        res.status(200).json({
            d,
            message: "Data added successfully",
        });
    }).catch(e => console.log('error' + e));

});



router.delete('/:id', async (req, res) => {

    await knex('todo_list').where('id', '=', req.params.id).del().then(d => {//table name here in knex() having database todo in knex.js file
        console.log(d);
        res.status(200).json({
            d,
            message: "Data deleted successfully",
        });
    }).catch(e => console.log('error' + e));

});


module.exports = router;