/**
 * Created by liujinhe on 17/2/22.
 */

import React from 'react';
import {Link} from 'react-router';
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane;

require('./layout.css');

import Home from './home.js'
import Users from './users.js'

class layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onChange(state) {

    }

    render() {

        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Home" key="1"><Home/></TabPane>
                    <TabPane tab="Users" key="2"><Users/></TabPane>
                </Tabs>


                <footer style={style.footer}>@copyright http://www.brusport.com/. Email:ljhjay1@163.com</footer>
            </div>
        );
    }
}

const style = {
    footer: {
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '30px',
        width: '100%',
        background: '#add8f7',
        textAlign:'center'
    }

}

export default layout;