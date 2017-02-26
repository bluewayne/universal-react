/**
 * Created by liujinhe on 17/2/24.
 */

import api from './api.js'

let actions = {

    getUsers: ()=> {

        return (dispatch, getState)=> {


            api.getUsers({}, function (res) {


                dispatch({type: 'GET_USERS', data: res.data})

            }, function () {

                dispatch({type: 'GET_USERS_FAIL'})

            })


        }
    },
    setUser: (username)=> {

        return (dispatch, getState)=> {


            api.setUser({name: username}, function () {


                dispatch({type: 'SET_USERS'})

            }, function () {
                dispatch({type: 'SET_USERS_FAIL'})

            })


        }
    },
    deleteUser: (user_id)=> {

        return (dispatch, getState)=> {


            api.deleteUser({user_id: user_id}, function (res) {


                dispatch({type: 'DELETE_USERS', data: res})

            }, function () {
                dispatch({type: 'DELETE_USERS_FAIL'})

            })


        }
    }


}

export default actions;