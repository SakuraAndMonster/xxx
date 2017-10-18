/**
 * 讲师列表模块
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    //用requireJS官方提供的text查看读取模板内容
    //text插件的路径 !  模板文件的路径(不能省略.html后缀名)
    "text!tpls/teacherListTpl.html"
],function($,teacherListTpl){

    return function(){

        // $(".main").html("加载了讲师管理模块");


        //完成渲染讲师列表的功能？
        //-->把整个页面拼接出来？
        //  -->也就是把页面结构+页面数据整合在一起
        //      -->1、页面结构：模板引擎
        //      -->2、数据：ajax请求

        $('.main').html(teacherListTpl);

        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(res){
                if(res.code!==200){
                    return consoloe.log()
                }
            }
        })
    }

})