/**
 * Created by liujinhe on 17/2/22.
 */

let express=require('express');
let http=require('http');
let config =require('../config');

let app=new express();

let server=http.Server(app);

let users=require('./routes/users');

app.use('/users',users);

server.listen(config.api.port, function (err) {

    if(err){

        console.error('api server get error!');
        return;
    }else{
        console.info(`api server run on port: ${config.api.port} !`);

    }

})



