//圓餅圖顏色
const chasrtColors = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#FFC234',
  '#8549ba'
];
//主題開關
var theme = true;

$(".switch").click(function(){
  $("body").toggleClass("dark-theme");
  $("i.fa.fa-sun-o").toggle();
  theme = !theme;
  console.log(theme);
  if(theme){
  document.getElementsByTagName('body')[0].style.setProperty('--light_sub','#F6C393');
  document.getElementsByTagName('body')[0].style.setProperty('--light_btn','#51D5C2');
}else{
  document.getElementsByTagName('body')[0].style.setProperty('--light_sub','#169c7f');
  document.getElementsByTagName('body')[0].style.setProperty('--light_btn','#d95989');
}
});

//選單
$("li").click(function(){
  var n = $(this).attr("menu-id");
  $("li").removeClass("active");
  $(this).addClass("active");
  $("section").hide();
  $(".bg").find("section").eq(n).fadeIn(1000);
})

//圓餅圖

$("#c_c").click(function(){
  make_chart()
});

function make_chart(){
var ctx = $("#chart1");
var chart = new Chart(ctx, {
  			type: "doughnut", // 圖表類型
  			data: {
  				labels: [ "HTML", "CSS/SCSS","JavaScript", "AJAX","Vue.js"], // 標題
  				datasets: [{
  					label: "# of Votes", // 標籤
  					data: [ 8, 7, 6, 5, 3], // 資料
  					backgroundColor: [ // 背景色
  					chasrtColors[0],
  					chasrtColors[3],
  					chasrtColors[5],
            chasrtColors[6],
            chasrtColors[4],
  					],
  					borderWidth: 1 // 外框寬度
  				}]
  			},
        options: {
          title: {
            display: true,
            text: "Frontend Engineer",
          }
        }
  		});

var ct2 = document.getElementById( "chart2" );
var chart2 = new Chart(ct2, {
  			type: "doughnut", // 圖表類型
  			data: {
  				labels: [ "Tax Accuntant", "Financial Statements","Gerneral Ledger","Data Analasis"], // 標題
  				datasets: [{
  					label: "# of Votes", // 標籤
  					data: [ 8, 8, 10, 8,], // 資料
  					backgroundColor: [ // 背景色
  					chasrtColors[1],
  					chasrtColors[2],
  					chasrtColors[8],
            chasrtColors[7],
  					],
  					borderWidth: 1 // 外框寬度
  				}]
  			},
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Accunting",
          },
        }
  		});
  Chart.defaults.global.defaultFontColor = '#333';
};

//swiper

var swiper = new Swiper(".mySwiper", {
        // cssMode: true,
        speed: 0,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
