/**
 * Created by Chih-Hao on 14-10-26.
 */
//$(document).ready(function(){
//    alert("one");
//})
//$().ready(function () {
//    alert("two");
//})

$(function(){
    $("#panel1").click(function () {
        $(this).animate({left:"+=100px",height:"+=20px"},1000,function(){
            $(this).css('border','5px solid blue')
        })
    })
})