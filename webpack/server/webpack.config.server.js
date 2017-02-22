/**
 * Created by liujinhe on 17/2/22.
 */

import {server_configuration} from 'universal-webpack'
import setting from './universal-webpack-settings.js'
import config from '../webpack.config.js'

export default  server_configuration(config,setting);