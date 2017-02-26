/**
 * Created by liujinhe on 17/2/24.
 */

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import userAction from '../actions/users.js'

import {Input,Button,Card} from 'antd'
require('./users.css');

@connect((state) => {
        return {usersStore: state.usersStore}
    }
    , (dispatch)=> {

        return {userAction: bindActionCreators({...userAction}, dispatch)}
    }
) class users extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.addUser = this.addUser.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.refresh();

    }

    refresh() {
        let {userAction,users}=this.props;
        userAction.getUsers();

    }

    componentWillReceiveProps(next_props) {

        if (next_props.usersStore.stale) {
            this.refresh();
        }

    }

    componentWillUnmount() {

    }

    onChange(e) {

        this.setState({name: e.target.value})

    }

    addUser() {


        this.props.userAction.setUser(this.state.name);

    }

    deleteUser(user_id) {
        this.props.userAction.deleteUser(user_id);
    }

    render() {

        let users1 = [{id: 1, name: 'bruce1'}, {id: 2, name: 'bruce2'}]

        let {usersStore}=this.props;


        let userMarkup = usersStore['users'].map(user=> {

            return (
                <li key={user.id} style={{ margin: '10px 0px 10px'}}>

                    <div style={{ width: '100px' ,margin: '0 10px 0 0',display:'inline-block'}}><span>{user.name} </span></div>
                    <Button type="primary" shape="circle" icon="minus-circle" onClick={()=>this.deleteUser(user.id)}/>
                </li>

            )
        })

        return (
            <div >

                <Card title="name input" style={{ width: '600px' ,margin: '0 auto 0'}}>
                    <ul>
                        {userMarkup}
                    </ul>

                    <div style={{ marginTop: '50px'}}>
                        <Input placeholder="input user name" size="large" onChange={this.onChange}/>
                        <Button type="primary" shape="circle" icon="plus-circle" onClick={this.addUser}/>
                    </div>

                </Card>


            </div>
        );
    }
}


export default users;