/*页面加载完成*/
window.onload = function(){
    deleteBox();
}
/*弹出效果*/
function deleteBox(){
    /*
    * 1.点击删除按钮的时候  动画弹出删除框
    * 2.点击删除按钮的时候  删除盒子需要做一个打开盖子的动画
    * 3.点击取消按钮的时候  关闭弹出框 删除按钮动画关闭盖子
    * */

    /*获取弹出框*/
    var win = document.querySelector('.jd_win');
    /*盒子*/
    var box = win.querySelector('.jd_win_box');
    /*所有的删除按钮*/
    var deleteList = document.querySelectorAll('.delete_box');

    var deleteBox = null;

    /*绑定点击事件*/
    for(var i  = 0 ; i < deleteList.length ; i ++){
        deleteList[i].onclick = function(e){
            /*1.点击删除按钮的时候  动画弹出删除框*/
            /*显示弹出层*/
            win.style.display = "block";
            /*家动画*/
            box.className = "jd_win_box bounceInDown";

            /*翻盖动画*/
            deleteBox = this;
            /*找到盖子*/
            var deleteUp = deleteBox.querySelector('span:first-child');
            console.log(deleteUp);
            /*加过度*/
            deleteUp.style.webkitTransition = "all 1s";
            deleteUp.style.transition = "all 1s";
            /*加旋转*/
            deleteUp.style.webkitTransform = "rotate(-30deg) translateY(2px)";
            deleteUp.style.transform = "rotate(-30deg) translateY(2px)";
            /*设置旋转原点*/
            deleteUp.style.webkitTransformOrigin = "0 5px";
            deleteUp.style.transformOrigin = "0 5px";
        }
    }

    /*绑定取消事件*/
    document.querySelector('.cancel').onclick = function(){
        /*3.点击取消按钮的时候  关闭弹出框 删除按钮动画关闭盖子*/
        /*隐藏弹出框*/
        win.style.display = "none";
        /*删除按钮动画关闭盖子*/
        if(deleteUp){
            var deleteUp = deleteBox.querySelector('span:first-child');
            deleteUp.style.webkitTransform = "none";
            deleteUp.style.transform = "none";
        }
    }
}