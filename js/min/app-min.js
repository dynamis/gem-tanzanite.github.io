function initSlider(){slider=new flux.slider("#slider",{autoplay:!1,pagination:!1});var t=$("#photo_nav a");t.click(function(e){var a=t.index(this);slider.showImage(a,transition_type),e.preventDefault()})}var params_data={data_1:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,lightcolor:"",lighttype:"さわやか",music_num:0,music_tit:"朝のジャズ"},data_2:{temp:28,strong:"中",tv_ch:4,tv_name:"8:00 モーニング・朝<br>モズテレビ",light:7,music_num:1,music_tit:"朝食に聞くクラシック"},data_3:{temp:28,strong:"中",tv_ch:5,tv_name:"8:30 おはようジャパン<br>JHK",light:6,music_num:2,music_tit:"朝のジャズ"},data_4:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:3,music_tit:"朝のジャズ"},data_5:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:4,music_tit:"朝のジャズ"},data_6:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:5,music_tit:"朝のジャズ"},data_7:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:6,music_tit:"朝のジャズ"},data_8:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:7,music_tit:"朝のジャズ"}},electro_power_data=[{used_power_num:365,comp_num:"+63"},{used_power_num:263,comp_num:"+61"},{used_power_num:137,comp_num:"+20"},{used_power_num:75,comp_num:"+60"},{used_power_num:463,comp_num:"+43"},{used_power_num:477,comp_num:"+23"},{used_power_num:400,comp_num:"+55"},{used_power_num:600,comp_num:"+79"},{used_power_num:300,comp_num:"+145"},{used_power_num:422,comp_num:"+124"},{used_power_num:475,comp_num:"+189"}],temps_data=[{temp:22,time:6},{temp:23,time:9},{temp:25,time:12},{temp:26,time:15},{temp:24,time:18},{temp:24,time:21},{temp:22,time:0},{temp:20,time:3}],transition_type="bars",slider;$(".ctrl_btns li, .touchmonth_li, .chart_panel").on("touchstart",function(){$(this).addClass("active")}),$(document).on("touchend",".ctrl_btns li, .touchmonth_li, .chart_panel, .app_photo",function(){if($(this).removeClass("active"),this.className.indexOf("data_")!=-1){var t=$(this).attr("class");$(".app_temp .param_value em").text(params_data[t].temp),$(".app_temp .param_data ").text("冷房｜"+params_data[t].strong),$(".app_tv .param_value em").text(params_data[t].tv_ch),$(".app_tv .param_data em").text(params_data[t].tv_name)}else if(this.className.indexOf("touchmonth_li")!=-1){var e=Number($(this).attr("id").replace("m",""));$(".detail").hasClass("power_detail")?(e>9?$(".tooltip").css({right:680-61*e,left:"auto"}):$(".tooltip").css({left:61*e,right:"auto"}),$(".tooltip .start_month").text(e),$(".tooltip .end_month").text(e+1),$(".tooltip .used_power_num").text(electro_power_data[e-1].used_power_num),$(".tooltip .comp_num").text(electro_power_data[e-1].comp_num),$(".touchmonth_li").removeClass("active"),$(this).addClass("active")):$(".detail").hasClass("temp_detail")&&(e>9?$(".tooltip").css({right:680-79*e,left:"auto"}):$(".tooltip").css({left:79*e,right:"auto"}),$(".tooltip .used_power_num").text(temps_data[e-1].temp),$(".tooltip .times").text(temps_data[e-1].time),$(".touchmonth_li").removeClass("active"),$(this).addClass("active"))}else if(this.className.indexOf("chart_panel")!=-1){var a=this.className.indexOf("chart_temp")===-1?"./power_detail.html":"./temp_detail.html";$(".detail_window_load_content").empty().load(a,function(){$(".detail_window").addClass("show")})}else this.className.indexOf("app_photo")!=-1&&$(".detail_window_load_content").empty().load("./photo_viewer.html",function(){$(".detail_window").addClass("show"),initSlider()})}),$(document).on("touchend",".close_btn",function(){$(".detail_window").removeClass("show"),location.hash.match(/#id_ctrl|photo/gi)}),$(document).on("touchend",".header_close_btn",function(){$(".detail_window").removeClass("show"),location.hash=""}),window.addEventListener("hashchange",function(t){"#id_ctrl"===location.hash?$(".global_header").addClass("hide_close"):"#photo_viewer"===location.hash?$(".global_header").addClass("hide_close"):$(".global_header").removeClass("hide_close")},!1),$(document).on("change","#transition_type",function(){transition_type=this.value,console.log(transition_type)});