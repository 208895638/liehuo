$(function(){
	var index={		
		init:function(){
			this.bindEvent();
			this.render();
			this.copy();			
		},
		bindEvent:function(){
			var that=this;
			//说明操作步骤   顺序执行
//			点击首页"用户登录"按钮会弹出登录窗
//          鼠标划过没有账号  显示提示信息
//          点击输入框之后的差号清除里面的字体
//			点击登录窗中的登录按钮弹窗消失  且第一屏会显示用户信息   
//			用户点击页面中的领取礼包按钮(所有的都一样)弹出选择区服弹窗
//			用户点击选择大区弹窗的确定按钮  所有领取礼包按钮变已经领取
//			当领取失败时   mask遮罩会消失同时默认选择区服弹窗显示
//			用户点击退出  会重置为未登录前的状态
//			复制验证码是this.copy();
			
			//点击差号弹窗消失
			$(".mask h6").on("click",function(){
				$(this).parent().parent().show().siblings().hide();
				$(".mask").fadeOut();				
			});			
			//点击登陆 弹出登录框
			$(".login").on("click",function(){
				$(".mask").fadeIn();
				$(".logins").show().siblings().hide();
			});
			//鼠标划过没有账号  显示提示信息
			$(".logins h5").hover(function(){
				$(".tips").show();
			},function(){
				$(".tips").hide();
			});
			//点击输入框之后的差号清除里面的字体
			$(".logins .per input").on("input",function(){
				if($(this).val().length==0){
					$(this).siblings().hide();
				}else{
					$(this).siblings().show();
				}				
			});
			$(".logins .per p span").on("click",function(){
				console.log(1);1
				$(this).siblings().val("");
			})
			//点击弹窗登陆按钮   弹窗消失   并在页面顶部显示个人信息
			$(".logins h3").on("click",function(){
				$(".logOff").removeClass("btnHide").siblings().addClass("btnHide");//页面退出登录显示   登录账号消失
				$(".firstSec h2").show();  //个人信息显示
				$(".mask").fadeOut();
				$(".infos").show().siblings().hide(); //显示选择区服
			});
			//点击领取奖励  出现选择区服弹窗
			$(".lq").on("click",function(){  //全民福利对应的按钮
				$(".infos").show().siblings().hide();
				$(".mask").fadeIn();
			});
			$(".gift_lq").on("click",function(){  //老兵回归对应的按钮
				$(".infos").show().siblings().hide();
				$(".mask").fadeIn();
			});
			$(".vets").on("click",function(){  //邀请好友回归对应的按钮
				$(".infos").show().siblings().hide();
				$(".mask").fadeIn();
			});
			//点击选择大区的确定按钮  所有领取按钮券变已经领取
			$(".infos  h3 a").on("click",function(){
				$(this).parents(".infos").siblings(".giftCode").show().siblings().hide();
				$(".lq").addClass("btnHide").siblings().removeClass("btnHide");//全民福利对应的按钮
				$(".gift_lq").addClass("gift_hide").siblings().removeClass("gift_hide");//老兵回归对应的按钮
				$(".vets").addClass("boxHide").siblings().removeClass("boxHide");//邀请好友回归对应的按钮
			});
			//点击退出登陆
			$(".logOff").on("click",function(){
				$(this).addClass("btnHide").siblings().removeClass("btnHide");  //页面上的登录按钮显示  退出按钮消失
				$(".logins").show().siblings().hide();//登录弹窗显示其它消失
				$(".firstSec h2").hide();//页面上的个人信息隐藏
				//下面的按钮全部变成未领取状态
				$(".lq").removeClass("btnHide").siblings().addClass("btnHide");//全民福利对应的按钮
				$(".gift_lq").removeClass("gift_hide").siblings().addClass("gift_hide");//老兵回归对应的按钮
				$(".vets").removeClass("boxHide").siblings().addClass("boxHide");//邀请好友回归对应的按钮
			});
			//点击个人信息的退出按钮
			$(".firstSec h2 a").on("click",function(){
				$(".logOff").addClass("btnHide").siblings().removeClass("btnHide");  //页面上的登录按钮显示  退出按钮消失
				$(".logins").show().siblings().hide();//登录弹窗显示其它消失
				$(this).parent().hide();//页面上的个人信息隐藏
				//下面的按钮全部变成未领取状态
				$(".lq").removeClass("btnHide").siblings().addClass("btnHide");//全民福利对应的按钮
				$(".gift_lq").removeClass("gift_hide").siblings().addClass("gift_hide");//老兵回归对应的按钮
				$(".vets").removeClass("boxHide").siblings().addClass("boxHide");//邀请好友回归对应的按钮
			});
			//领取失败 点击返回按钮的状态
			$(".isGiftCode h4 a").on("click",function(){
				$(".mask").fadeOut();
				$(".infos").show().siblings().hide();
			})
			function setScroll(){///滚动条设置
				$("#scroll").slimScroll({
				height: "250px",
				alwaysVisible: true,
				});
			}
			setScroll();
			
		},
		render:function(){
			var that=this;
			
		},
		copy:function(){
		    var clipboard = new Clipboard('.copy');
		    //优雅降级:safari 版本号>=10,提示复制成功;否则提示需在文字选中后，手动选择“拷贝”进行复制
		    clipboard.on('success', function(e) {
		        alert('复制成功!');
		        e.clearSelection();
		    });
		    clipboard.on('error', function(e) {
		        alert('请选择“拷贝”进行复制!');
		    });
		    var clipboards = new Clipboard('.link');
		    //优雅降级:safari 版本号>=10,提示复制成功;否则提示需在文字选中后，手动选择“拷贝”进行复制
		    clipboards.on('success', function(e) {
		        alert('复制成功!');
		        e.clearSelection();
		    });
		    clipboards.on('error', function(e) {
		        alert('请选择“拷贝”进行复制!');
		    });
		}
	};
	index.init();
})