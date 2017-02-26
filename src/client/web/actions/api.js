/**
 * Created by liujinhe on 17/2/9.
 */

import fetch from  'isomorphic-fetch'
import configuration from '../../../config.js'
import 'babel-polyfill'
import { message } from 'antd';

//const apiPrefix = `http://${configuration.host}:${configuration.client.port}` //我擦，一定要叫http  (!!!!!!一定要记住，无语了)

const error = function () {
    message.error('This is a message of error');
};


export default {
    getArgsName: function (argsObj) {
        let argText = '';

        for (let pro in argsObj) {

            if (argsObj.hasOwnProperty(pro))
                argText += (argText ? '&' : '') + `${pro}=${argsObj[pro]}`
        }
        return argText;
    },
    fetchApi: function (url, success, err = error) {
        fetch(url, {credentials: 'include'}).then(function (response) { //Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
            return response.json();
        }).then(function (data) {

            success && success(data);

        }).catch(function (e) {
            err()

            console.log("Oops, error    +"+JSON.stringify(e));

        });

    },

    getUsers: function (argsObj, success, error) {

        let argText = this.getArgsName(argsObj);
        let url = `/api/users/getUsers` + (argText && ('?' + argText));

        //console.log('url    :'+url);

        this.fetchApi(url, success, error)


    },
    setUser: function (argsObj, success, error) {

        let argText = this.getArgsName(argsObj);
        let url = `/api/users/setUser` + (argText && ('?' + argText));

        //console.log('url    :'+url);

        this.fetchApi(url, success, error)


    },
    deleteUser: function (argsObj, success, error) {

        let argText = this.getArgsName(argsObj);
        let url = `/api/users/deleteUser` + (argText && ('?' + argText));

        //console.log('url    :'+url);

        this.fetchApi(url, success, error)


    }

}


