/**
 * Created by Lenovo on 2017/11/23.
 */
$(window).load(function () {
        //旋转木马的原理：每个盒子一套样式;点击左/右侧按钮的时候，
        //              把数组中的第/最后一个添加到数组的最前面/后面;
    //需求1: 页面加载的时候，每个li标签享受一套样式;(鼠标进入显示，移开隐藏)
    //需求2: 点击右侧按钮，删除数组中最后一个，添加到数组的最前面;
    //需求3: 点击左侧按钮，删除数组中第一个，添加到数组的最后面;


    var arrOfJson = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity: 0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity: 0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity: 1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity: 0.2,
            "z-index":2
        }
    ];

    



    
});








