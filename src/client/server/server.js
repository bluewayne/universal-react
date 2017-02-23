/**
 * Created by liujinhe on 17/2/22.
 */


var express=require('express');
var http=require('http');
var path=require('path');

var routes=require('../web/routes');
import {RouterContext,match} from 'react-router'
import ReactDOM from 'react-dom/server'
import React from 'react'


export default function () {

    var app=new express();

    var server=http.Server(app);

    app.set('views', path.resolve(__dirname,'..','..','src/client/web/views'));//这是要运行的目录不说server.js而是主目录下的build/server/server.js

    app.use(express.static(__dirname+'/public')) ;

    console.log('views: '+path.resolve(__dirname,'..','/web/views'))

    app.use(function (req, res) {

        match({routes,location:req.url},(err,redirectLocation,renderProps)=>{

            if(err){
                res.status(500).send(err.message);
            }else if(redirectLocation){
                res.status(302).redirect(redirectLocation.pathname+redirectLocation.search)
            }else if(renderProps){
                const html=ReactDOM.renderToString(<RouterContext {...renderProps}/>);

                console.log('html   '+JSON.stringify(html));

                res.render('index.ejs',{app:html});

            }

        })

    })


    server.listen(3000, function (err) {
        if(err){
            console.error('page server get error!')
        }else{
            console.info('page server run on port 3000!')
        }


    })

}


