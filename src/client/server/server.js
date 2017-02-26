/**
 * Created by liujinhe on 17/2/22.
 */

var express=require('express');
var http=require('http');
var path=require('path');
var httpProxy=require('http-proxy');
var config=require('../../config');

var routes=require('../web/routes');
import {RouterContext,match} from 'react-router'
import ReactDOM from 'react-dom/server'
import React from 'react'
import configureStore from '../web/store.js'
import { Provider } from 'react-redux'

export default function () {

    var app=new express();

    var server=http.Server(app);

    app.set('views', path.resolve(__dirname,'..','..','src/client/web/views'));//这是要运行的目录不说server.js而是主目录下的build/server/server.js

    app.use(express.static(__dirname+'/public')) ;

    let proxy=httpProxy.createProxyServer({target:`http://127.0.0.1:${config.api.port}`});

    app.use('/api',(req,res)=>{

        return proxy.web(req,res);
    })


    //console.log('views: '+path.resolve(__dirname,'..','/web/views'))

    app.use(function (req, res) {

        match({routes,location:req.url},(err,redirectLocation,renderProps)=>{

            //res.render('index.ejs');


            if(err){
                res.status(500).send(err.message);
            }else if(redirectLocation){
                res.status(302).redirect(redirectLocation.pathname+redirectLocation.search)
            }else if(renderProps){
                let store = configureStore();

                var html = ReactDOM.renderToString(<Provider
                    store={store}><RouterContext {...renderProps} /></Provider>);

                res.render('index.ejs',{app:html});

            }

        })
                //res.render('index.ejs');


    })


    server.listen(config.client, function (err) {
        if(err){
            console.error('page server get error!')
        }else{
            console.info('page server run on port 3000!')
        }


    })

}


