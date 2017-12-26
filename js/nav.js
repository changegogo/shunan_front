/**
 * Created by Administrator on 2017/12/22.
 */
//初始化2017-12-22
    $(function () {
var imgh1=parseInt($(".warper").find("img").height())+30+"px";
$(".warper").css("height",imgh1);
var h1=parseInt($(".swiper-slide").find(".thumbnail").height())+30+"px";
$(".swiper-wrapper,.swiper-slide").css("height",h1);
$(".swiper-container").css("height",h1);
// 导航
//2017-12-22
var navh1=parseInt($(".nav").find("img").height())-6+"px";
var navh=$(".nav").find("img").height();
$(".nav").css("height",navh1);
$(".nav a").css("height",navh1);
$(".nav a").css("lineHeight",navh1);
$(".nav li").css("lineHeight",navh1); //2017-12-26
$(".nav li").css("lineHeight",navh1); //2017-12-26
$(".nav div").css("bottom",navh);
$('.nav>div a').mouseover(function () {
    $('.nav>div a').css("background","#C90102");
    $(this).css("background","#A00314")
})
    })

//2017-12-25
setwidth()
window.onresize = function(){
    setwidth();
};
function setwidth() {
       var leftw=parseInt($(".actirl").width())-690+"px";
   if(document.body.clientWidth>=1366){
       $(".actirl .right").css("width",leftw);
       $(".actirl .right").show()
      }else {
        $(".actirl .right").hide()
         }
}

//天气预报
var url1='http://20.14.3.85:8080/committeewb/weather';
$.ajax({
    type:'get',
    url:url1,
    async:true,
    dataType: 'JSON',
    success:function(data){
        var place=data.weatherinfo.city;
        var maxTemp=data.weatherinfo.temp1;
        var minTemp=data.weatherinfo.temp2;
        var todayWeather=data.weatherinfo.weather
       $("#weather").html(place+"&nbsp;"+todayWeather+"&nbsp;"+maxTemp+"-"+minTemp)
        console.log(data)
    },
    error:function (err) {
        console.log(err)
    }
})