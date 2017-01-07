/**
 * Created by Chanaka Fernando on 1/1/2017.
 */

const fColor = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    fg: {
        Black: "\x1b[30m",
        Red: "\x1b[31m",
        Green: "\x1b[32m",
        Yellow: "\x1b[33m",
        Blue: "\x1b[34m",
        Magenta: "\x1b[35m",
        Cyan: "\x1b[36m",
        White: "\x1b[37m",
        Crimson: "\x1b[38m"
    }
};

module.exports.logger=function(msg,statusCode,err){
    var message =msg;
    var code =statusCode;
    var col;
    switch (code){
        case 200: {col = fColor.fg.Green;}break;
        case 404: {col = fColor.fg.Red;}break;
        case 304: {col = fColor.fg.Yellow;}break;
        case 500: {col = fColor.fg.Blue;}break;
    }
    var time=new Date().toLocaleString();
    if(err){
        var errorMsg =err.message;
        var errName =err.name;
        console.log(fColor.fg.Red,time+",  " +col,code+', ' +fColor.fg.Red,message,fColor.fg.White+" ==>"+fColor.fg.Red,errName+'... '+errorMsg,fColor.Reset);
    }else{
        console.log(fColor.fg.Cyan,time+", "+fColor.Bright,col,code+", "+fColor.fg.Magenta,message,fColor.Reset);
    }
};

