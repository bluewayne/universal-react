/**
 * Created by liujinhe on 17/2/23.
 */

let express = require('express');
let router = express.Router();

let userMap = new Map();
let count = 0;

let result = {
    code: 0,
    data: {}
}


router.get('/getUsers', function (req, res) {

    let keys = Array.from(userMap.keys());

    let users = keys.map(function (key) {
        let name = userMap.get(key);
        return {
            id: key, ...name
        }
    })


    res.send({...result,data:users})

})


router.get('/setUser', function (req, res) {

    let name = req.query.name;

    count++;

    userMap.set(String(count), {name: name})



    res.send({...result})
})

router.get('/deleteUser', function (req, res) {
    let nameId = req.query.user_id;


    userMap.delete(nameId);
    res.send({...result})
})



module.exports = router;