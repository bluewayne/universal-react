/**
 * Created by liujinhe on 17/2/22.
 */
/**
 * 正常用node 命令就可以启动server.js文件(比如:"page-server": "node ./src/client/server/server.js")，但是因为我们要启动，已经经过webpack打包的server(打包在build/server/server.js中)的文件，所以
 * 用universal-webpack的方法区执行，它会根据之前定义在universal-webpack-setting.js文件
 */

import {server} from 'universal-webpack';

import setting from '../../../webpack/server/universal-webpack-settings.js'
import config from '../../../webpack/webpack.config.js'


server(config,setting);

