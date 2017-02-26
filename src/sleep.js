/**
 * Created by liujinhe on 17/2/22.
 */

let args = process.argv.slice(2);
let delay = args[0];


if (typeof delay === 'undefined') {

    console.error(`[sleep#${process.pid}] delay (in ms) not specified`)

}

if (delay != parseInt(delay)) {

    console.log(`[sleep#${process.pid}] delay parameter is invalid`);
}

setTimeout(function () {
    process.exit(0)
}, delay)




