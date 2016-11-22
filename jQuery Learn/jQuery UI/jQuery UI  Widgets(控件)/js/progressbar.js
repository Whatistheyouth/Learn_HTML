/**
 * Created by TZM on 2016/9/6.
 */


var pb;
var max=100;
var current= 0;

$(document).ready(function(){
    pb = $('#progressbar') ;
    pb.progressbar({max:100});
    setInterval(changeP,100);             //没100ms执行一次changeP()函数
});

function changeP(){
    current++;
    if(current>=100){
        current=0;
    }
    pb.progressbar('option',"value",current);
}