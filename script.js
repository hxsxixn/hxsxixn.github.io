var s=skrollr.init();
document.body.id = "skrollr-body"

$(window).scroll(function(e){
                 if($(window).scrollTop()>300){
                    $("#exp").css("opacity","0");
                    $("a.navbar-brand").css("opacity","1");
                    $("nav.navbar").css("background-color","#fff")
}else{$("#exp").css("opacity","1");
      $("a.navbar-brand").css("opacity","0");
      $("nav.navbar").css("background-color","transparent")}
                 });

$(document).on("click","a",function(evt){
  evt.preventDefault;
  var target = $(this).attr("href");
  $("html,body").animate({scrollTop: $(target).offset().top-35},500);
});

$(window).mousemove(function(evt){
  var x=evt.pageX;
  var y=evt.pageY;
  console.log([x,y]);
  
  var catx=$("#catimg").offset().left+$("#catimg").width();
  var caty=$("#catimg").height();
  if (x<=catx){
    $("#catimg").attr("src","https://i.imgur.com/AFWPPum.png")
  };
  if (y<=caty){
    $("#catimg").attr("src","https://i.imgur.com/hgRebP1.png")
  };
  if(x>catx && y>caty){
    $("#catimg").attr("src","https://i.imgur.com/6cz5CNn.png")
  };
  var expx=$(window).width()/2;
  var expy=$(".explore").offset().top;
  console.log([expx,expy]);
  $(".explore").mouseenter(function(){$("#lightbulb").css("opacity","1");
                                     });
  $(".explore").mouseleave(function(){$("#lightbulb").css("opacity","0");
                                     });
  $(".bottom").css("left",x/-80-100+"px");
  
})

$(".cha").mouseenter(function(){$(this).addClass("up");
                                $(".infos").addClass("rowin");
                                $(".loris").css("transform","translate(210px,-210px) rotate(180deg)")});
$(".cha").mouseleave(function(){$(this).removeClass("up");
                                $(".loris").css("transform","translate(0px,-0px) rotate(180deg)")});
$("#rab").mouseenter(function(){$(".infos").text("愛說話，個性爽朗，喜歡的字是「happy」。")});
$("#rab").mouseleave(function(){$(".infos").removeClass("rowin");});
$("#sloth").mouseenter(function(){$(".infos").text("酷酷的，超現實主義又風趣，永遠在祈禱世界和平。")});
$("#sloth").mouseleave(function(){$(".infos").removeClass("rowin")});
$("#korat").mouseenter(function(){$(".infos").text("個性穩定、像個老師，很會照顧人。")});
$("#korat").mouseleave(function(){$(".infos").removeClass("rowin")});
$("#loris").mouseenter(function(){$(".infos").text("個性溫和、是個美食家，喜歡跟大家玩在一起。")});
$("#loris").mouseleave(function(){$(".infos").removeClass("rowin")});

$("#store01").click(function(){
  $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.555577667439!2d121.51521446484217!3d25.049151983965277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9302cd8d9fb%3A0x4d426da53892f2f2!2zQ1JBRlRIT0xJQ-Wuh-WumeS6uiDlj7DljJfkuqznq5nlupc!5e0!3m2!1szh-TW!2stw!4v1646070118443!5m2!1szh-TW!2stw")
});
$("#store02").click(function(){
  $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89766.81073988769!2d120.51641656793954!3d24.244924173779705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34696b036b33228f%3A0x9ebbf30d5eff33f6!2zQ1JBRlRIT0xJQ-Wuh-WumeS6uiDlj7DkuK3kuInkupXlupc!5e0!3m2!1szh-TW!2stw!4v1646067278569!5m2!1szh-TW!2stw")
})

$("#btn").click(function(){
  $(".mail").css("transform","scale(0.06)");
  $(".mail").css("opacity","0");
  $(".envelope").css("opacity","1");
  $(".envelope").css("animation","send 1s 1s both");
})
