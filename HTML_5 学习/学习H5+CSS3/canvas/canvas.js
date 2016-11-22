/**
 * Created by TZM on 2016/8/20.
 */
function draw(id){
    var canvas = document.getElementById(id);


    if(canvas.getContext){
        var context =canvas.getContext('2d');  //getContext('2d')方法来获取渲染上下文和它的绘画功能，只有一个参数上下文的格式
    }else{
        //canvas-unsupported code here
    }
    context.fillStyle = "#000";
    context.strokeStyle = "#f60";
    context.lineWidth = 5 ;
    context.fillRect(0,0,300,200);
    context.strokeRect(20,20,180,120);
}