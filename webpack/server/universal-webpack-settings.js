/**
 * Created by liujinhe on 17/2/22.
 */

//server端webpack配置的自定义部分,这里的input和out应该是设置,entry和output的属性
module.exports={
    server:{
        input:'./src/client/server/server.js',
        output:'./build/server/server.js'
    },
    exclude_from_externals:[
        'antd'
    ]

}