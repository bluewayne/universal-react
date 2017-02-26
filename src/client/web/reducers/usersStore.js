/**
 * Created by liujinhe on 17/2/23.
 */

const defaultState = {
    users: [{id:3,name:'bruce3'}],
    stale:true
}

export default function (state = defaultState, action={}){

    switch (action.type) {

        case 'GET_USERS':
            //TODO

            //console.log('GET_USERS action.data  :'+JSON.stringify(action.data));
            //
            //let newState=Object.assign({},state,{users:action.data,stale:false})
            //
            //console.log('newState   :'+JSON.stringify(newState));

            return  {...state,users:action.data,stale:false};
        case 'SET_USERS':
            //let newState=Object.assign({},state,{stale:true})

            return {...state,stale:true};
        case 'DELETE_USERS':
            //TODO
            return {...state,stale:true};
        default :
            //TODO
            return state;
    }


}
