/**
 * 讲师列表模块
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    //用requireJS官方提供的text查看读取模板内容
    //text插件的路径 !  模板文件的路径(不能省略.html后缀名)
    "text!tpls/teacherListTpl.html",
    //arttemplate模板引擎
    "art",
    //查看讲师模块
    "teacher/show",
    //添加讲师
    "teacher/add"
],function($,teacherListTpl,art,teacherShow,teacherAdd){

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
                if(res.code!=200)  return consoloe.log(res.msg);
                var result=res.result;
                //把数据编译到模板中-->获取到真实的内容
                var html=art.render(teacherListTpl,{
                    r:result
                });
                //将事件绑定在这个新创建的特定的panel中
                var $panel=$(html);
                $panel.on("click","but-show",function(){
                    //通过适当的方式获取该行对应的讲师id
                    var tc_id=$(this).parent().attr("tc_id");
                    teacherShow(tc_id);
                }).on("click","btn-add",function(){
                    //添加讲师：
                    teacherAdd();

                });
                //把真实的内容放到页面中
                $(".main").html($panel);
            }
        })
    }

})