function initSlider(){slider=new flux.slider("#slider",{autoplay:!1,pagination:!1});var t=$("#photo_nav div.img");t.on("touchend",function(e){var o=t.index(this);slider.showImage(o,"random"===transition_type?void 0:transition_type),e.preventDefault()});var e=$("#transition_selection");e.text(transition_types[transtion_type_index]),e.on("touchend",function(){transtion_type_index<transition_types.length-1?transtion_type_index+=1:transtion_type_index=0,transition_type=transition_types[transtion_type_index],e.text(transition_type)})}function initVideoViewerEvent(){var t=0,e=0,o=0;$("#video_nav").on("touchstart",function(o){o.touches&&o.touches.length>0&&(t=o.touches[0].pageY+$("#video_nav").scrollTop(),1===o.touches.length&&(e=o.touches[0].pageY))}),$("#video_nav").on("touchend",function(a){if(a.touches){var n="";n=$(a.target).hasClass("thumb_video")?$(a.target).data("video-url"):$(a.target).closest(".thumb_video").data("video-url"),a.touches.length>0?t=a.touches[0].pageY+$("#video_nav").scrollTop():(o>THRESHOLD?a.stopPropagation():$(".video_play_window_inner").html('<video id="video_player" src="'+n+'" controls autoplay></video>'),e=o=0)}}),$("#video_nav").on("touchmove",function(a){a.touches&&($("#video_nav").scrollTop(t-a.touches[0].pageY),o=Math.abs(a.touches[0].pageY-e))})}var params_data={data_1:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,lightcolor:"",lighttype:"さわやか",music_num:0,music_tit:"朝のジャズ"},data_2:{temp:28,strong:"中",tv_ch:4,tv_name:"8:00 モーニング・朝<br>モズテレビ",light:7,music_num:1,music_tit:"朝食に聞くクラシック"},data_3:{temp:28,strong:"中",tv_ch:5,tv_name:"8:30 おはようジャパン<br>JHK",light:6,music_num:2,music_tit:"朝のジャズ"},data_4:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:3,music_tit:"朝のジャズ"},data_5:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:4,music_tit:"朝のジャズ"},data_6:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:5,music_tit:"朝のジャズ"},data_7:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:6,music_tit:"朝のジャズ"},data_8:{temp:27,strong:"強",tv_ch:1,tv_name:"7:00 おはようジャパン<br>JHK",light:6,music_num:7,music_tit:"朝のジャズ"}},electro_power_data=[{used_power_num:365,comp_num:"+63"},{used_power_num:263,comp_num:"+61"},{used_power_num:137,comp_num:"+20"},{used_power_num:75,comp_num:"+60"},{used_power_num:463,comp_num:"+43"},{used_power_num:477,comp_num:"+23"},{used_power_num:400,comp_num:"+55"},{used_power_num:600,comp_num:"+79"},{used_power_num:300,comp_num:"+145"},{used_power_num:422,comp_num:"+124"},{used_power_num:475,comp_num:"+189"}],temps_data=[{temp:22,time:6},{temp:23,time:9},{temp:25,time:12},{temp:26,time:15},{temp:24,time:18},{temp:24,time:21},{temp:22,time:0},{temp:20,time:3}],transition_types=["random","bars","blinds","blocks","blocks2","concentric","slide","warp","zip","bars3d","blinds3d","cube","tiles3d","turn"],transition_type="random",transtion_type_index=0,slider,startX=0,THRESHOLD=20;$(".ctrl_btns li, .touchmonth_li, .chart_panel, .app_photo, .app_video").on("touchstart",function(t){$(this).addClass("active"),t.changedTouches&&(startX=t.changedTouches[0].pageX)}),$(document).on("touchend",".ctrl_btns li, .touchmonth_li, .chart_panel, .app_photo, .app_video",function(t){if($(this).removeClass("active"),t.changedTouches){var e=Math.abs(t.changedTouches[0].pageX-startX);if(startX=0,e>THRESHOLD)return}if(this.className.indexOf("data_")!==-1){var o=$(this).attr("class");$(".app_temp .param_value em").text(params_data[o].temp),$(".app_temp .param_data ").text("冷房｜"+params_data[o].strong),$(".app_tv .param_value em").text(params_data[o].tv_ch),$(".app_tv .param_data em").text(params_data[o].tv_name)}else if(this.className.indexOf("touchmonth_li")!==-1){var a=Number($(this).attr("id").replace("m",""));$(".detail").hasClass("power_detail")?(a>9?$(".tooltip").css({right:680-61*a,left:"auto"}):$(".tooltip").css({left:61*a,right:"auto"}),$(".tooltip .start_month").text(a),$(".tooltip .end_month").text(a+1),$(".tooltip .used_power_num").text(electro_power_data[a-1].used_power_num),$(".tooltip .comp_num").text(electro_power_data[a-1].comp_num),$(".touchmonth_li").removeClass("active"),$(this).addClass("active")):$(".detail").hasClass("temp_detail")&&(a>9?$(".tooltip").css({right:680-79*a,left:"auto"}):$(".tooltip").css({left:79*a,right:"auto"}),$(".tooltip .used_power_num").text(temps_data[a-1].temp),$(".tooltip .times").text(temps_data[a-1].time),$(".touchmonth_li").removeClass("active"),$(this).addClass("active"))}else if(this.className.indexOf("chart_panel")!==-1){var n=this.className.indexOf("chart_temp")===-1?"./power_detail.html":"./temp_detail.html";$(".detail_window_load_content").empty().load(n,function(){$(".detail_window").addClass("show")})}else this.className.indexOf("app_photo")!==-1?$(".detail_window_load_content").empty().load("./photo_viewer.html",function(){$(".detail_window").addClass("show"),initSlider()}):this.className.indexOf("app_video")!==-1&&$(".detail_window_load_content").empty().load("./video_viewer.html",function(){$(".detail_window").addClass("show"),initVideoViewerEvent()})}),$(document).on("touchend",".close_btn",function(){$(".detail_window").removeClass("show"),$(".detail_window_load_content").empty(),location.hash.match(/#id_ctrl|photo/gi)}),$(document).on("touchend",".header_close_btn",function(){$(".detail_window").removeClass("show"),$(".detail_window_load_content").empty(),location.hash="",$(".global_header").removeClass("hide_close")}),$("#anchor_id_ctrl").on("touchstart",function(t){t.changedTouches&&(startX=t.changedTouches[0].pageX)}),$("#anchor_id_ctrl").on("touchend",function(t){if(t.changedTouches){var e=Math.abs(t.changedTouches[0].pageX-startX);if(startX=0,e>THRESHOLD)return;$(".global_header").addClass("hide_close"),location.hash="#id_ctrl"}}),$(document).on("change","#transition_type",function(){transition_type=this.value});var init_pos=0;$("main").on("touchstart touchend",function(t){t.touches&&t.touches.length>0&&(init_pos=t.touches[0].pageX+$("main").scrollLeft())}),$("main").on("touchmove",function(t){t.touches&&$("main").scrollLeft(init_pos-t.touches[0].pageX)}),$(document).on("touchend","#video_nav .thumb_video",function(){$(".video_app_content").addClass("playing")}),$(document).on("touchend",".video_app_content .detail_close_btn",function(){$(".video_app_content").removeClass("playing"),$(".video_play_window_inner").empty()});var worker=new Worker("./js/clock.js");worker.addEventListener("message",function(t){$("#meridian").text(t.data.meridian),$("time").text(t.data.timeString)});