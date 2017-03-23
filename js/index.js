$(document).ready(function () {

    //-----------------------------------------定义和初始化变量----------------------------------------
    var loadBox = $('aside.loadBox');
    var articleBox = $('article');
    var windowWd = $(window).width(), windowHt = $(window).height();
    var loadPer = $(".page1 .progress span");
    var _duration = 1000;
    var _page1 = $(".page1");
    var _page2 = $(".page2");
    var _page3 = $(".page3");
    var _page4 = $(".page4");
    var _page5 = $(".page5");
    var _alertMask = $(".page5 .alertMask");
    var _closejd = $(".page5 .jd .close");
    var _page6 = $(".page6");
    var _lnlight = 1;
    var _lightp = 0;
    var _page7 = $(".page7");
    var _scrollImg = 0;
    var _scrollContnt = "";
    var _srcollMax = 0;
    var _slidedown = $(".slidedown");
    console.log('window size:' + windowWd + '/' + windowHt);
    var soundList = {}, soundMax = 0, soundLoaded = 0;
    var bgmTime, bgmPlay, bgmBtn = $('a.bgmBtn');
    //----------------------------------------页面初始化----------------------------------------
    iorient.init();//屏幕翻转锁定，默认锁定竖屏，横屏提示
    icom.screenTo169(true, false);//把article标签拉伸至iphone5的高宽比例
    load_handler();
    sound_handler();
    icom.keyboard($(".page5 input"), articleBox, 0.15, 0.15);
    //----------------------------------------微信用户登录验证----------------------------------------	
    function userGetted(data) {
        console.log('用户头像：' + data.headimage);
        console.log('用户昵称：' + data.nickname);
        load_handler();
    }//end func
    //----------------------------------------加载页面图片----------------------------------------
    function load_handler() {
        console.log("page1");
        var loader = new PxLoader();
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/common/turn.gif');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/loadimg.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg1.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg2.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg3-1.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg3-2.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg3-3.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg4.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg5.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/bg7.jpg');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn5-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn5-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn5-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn5-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn6-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn6-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/btn6-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/close5.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/icon1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/icon2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/icon3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-5.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-6.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img1-7.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img3-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img5-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img5-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img5-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img5-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-5.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img6-6.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img8.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/img8-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln1-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln1-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln1-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln1-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln2-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln2-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln2-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln2-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln3-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln3-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln3-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln3-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln4-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln4-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln4-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/ln4-4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/title1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/title2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/title3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt4.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt6.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt6-1.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt6-2.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt6-3.png');
        loader.addImage('http://img.cdn.be-xxx.com/spdbank-children/images/index/txt6-4.png');
        //实际加载进度
        loader.addProgressListener(function (e) {
            var per = Math.round(e.completedCount / e.totalCount * 50);
            loadPer.html(per + '%');
        });
        loader.addCompletionListener(function () {
            load_timer(50);//模拟加载进度
            loader = null;
        });
        loader.start();
    }//end func
    //模拟加载进度
    function load_timer(per) {
        per = per || 0;
        per += imath.randomRange(1, 3);
        per = per > 100 ? 100 : per;
        loadPer.html(per + '%');
        if (per == 100)
            setTimeout(init_handler, 200);
        else
            setTimeout(load_timer, 33, per);
    }//edn func

    //----------------------------------------加载声音及处理----------------------------------------

    //----------------------------------------页面逻辑代码----------------------------------------
    function init_handler() {
        console.log('init handler');
        icom.fadeOut(loadBox, 500);
        showPage2();
        monitor_handler();
    }//end func
    function showPage2() {
        console.log("page2");
        imonitor.add({category: '首页', label: '幸运'});
        showPage(_page1, _page2, function () {
            $(".page2>.img").fadeIn(_duration);
            _slidedown.show();
            articleBox.one("swipeup", showPage3);
            _slidedown.one("click", showPage3);
        });
    }
    function showPage3() {
        console.log("page3");
        imonitor.add({category: '首页', label: '勇气'});
        showPage(_page2, _page3, function () {
            articleBox.one("swipeup", showPage4);
            _slidedown.one("click", showPage4);
        });
    }
    function showPage4() {
        imonitor.add({category: '首页', label: '坚持'});
        showPage(_page3, _page4, function () {
            articleBox.one("swipeup", showPage5);
            _slidedown.one("click", showPage5);
        });
        console.log("page4");
    }
    function showPage5() {
        imonitor.add({category: '首页', label: '点亮灯页'});
        $(".icon1,.icon3,.slidedown").hide();
        $(".icon2").show();
        showPage(_page4, _page5, function () {
            $(".page5 .btn1 img").on("touchend", function () {
                showPage5Mask("jd");
            });
            $(".page5 .btn2 img").on("touchend", function () {
                showPage5Mask("zf");
            });
            $(".page5 .close").on("touchend", hidePage5Mask);
            $(".page5 .btn3").on("click", function () {
                var tel = $(".jdtel").val();
                var num = $(".jdnum").val();
                if (!icom.checkStr(tel, 0)) {
                    icom.alert("请输入正确的手机号");
                    return;
                }
                if (!icom.checkStr(num, 2) || Number(num) < 1) {
                    icom.alert("金额为1至100万，且为整数");
                    return;
                }
                loadBox.fadeIn(250);
                loop.data.add('Item', {phone: tel, count: num}, function () {
                    loadBox.fadeOut(250);
                    showPage6();
                });

                console.log("金豆");
            });
            $(".page5 .btn4").on("click", function () {
                var txt = $(".zftxt").val();
                if (txt.length <= 0 || txt.length > 30) {
                    icom.alert("请输入30个字左右的祝福语");
                    return;
                }
                loadBox.fadeIn(250);
                loop.data.add('Item', {txt: txt}, function () {
                    loadBox.fadeOut(250);
                    showPage6();
                });
                console.log("祝福");
            });
            $(".page5 .img1").on("click", function () {
                $(".page5 .gz").fadeIn(_duration);
                $(".gzclose").one("click", function () {
                    $(".page5 .gz").fadeOut(_duration);
                });
            });
        });
        console.log("page5");

    }
    function showPage5Mask(cls) {
        _alertMask.fadeIn(_duration);
        $(".page5 ." + cls).fadeIn(_duration);
    }
    function hidePage5Mask() {
        _alertMask.fadeOut(_duration);
        $(".page5 .jd").fadeOut(_duration);
        $(".page5 .zf").fadeOut(_duration);
    }
    function showPage6() {
        loop.data.getcount('Item', {}, function (count) {
            _lightp = count + 10020;
            flipNums(_lightp);
            share_handler();
            $(".icon1,.icon3").hide();
            $(".icon2").show();
            showPage(_page5, _page6, function () {
                setTimeout(function () {
                    lnShowlight();
                }, _duration);
            });
            $(".page6 .btn3").on("touchend", function () {
                _page7.fadeIn(_duration, function () {
                    _page7.one("touchend", function () {
                        _page7.fadeOut(_duration);
                    });
                });
            });
            $(".page6 .btn2").on("touchend", showPage8);
            console.log("page6");
            imonitor.add({category: '首页', label: '亮灯页'});
        });
    }
    function showPage8() {
        $(".page8").fadeIn(_duration);
        $(".page8 .zf .close").one("touchend", function () {
            $(".page8").fadeOut(_duration);
        });
        setTimeout(function () {
            var txtbox = $(".page8 .zf .content");
            var content = $(".page8 .zf .content>div");
            var list1 = $(".page8 .zf .content>div .list1");
            var list2 = $(".page8 .zf .content>div .list2");
            if (txtbox.height() < list1.height()) {
                list2.html(list1.html());
                _scrollContnt = content;
                _srcollMax = list1.height();
                scrollImg();
            }
            console.log("max:" + _srcollMax);
        }, _duration);
    }
    function scrollImg() {
        _scrollImg++;
        _scrollContnt.css({y: -_scrollImg});
        setTimeout(scrollImg, 60);
        if (_scrollImg >= _srcollMax) {
            _scrollImg = 0;
        }
    }
    function lnShowlight() {
        if (_lnlight > 4) {
            flipNums(_lightp + 1);
        } else {
            $(".page6 .ln" + _lnlight).addClass("light");
            if (_lnlight === 4) {
                $(".page6 .img2,.page6 .img3").transition({opacity: 1, duration: _duration});
            }
            setTimeout(lnShowlight, _duration);
        }
        _lnlight++;
    }
    function flipNums(num) {
        var obj = $(".page6 .nums .num");
        var nums = ("000000" + num).toString().split("").reverse().slice(0, 6).reverse();
        console.log(nums);
        for (var i = 0; i < nums.length; i++) {
            var n = nums[nums.length - i - 1];
            flipNum(obj.eq(5 - i), n);
        }
        setTimeout(function () {
            $(".page6 .nums .num").removeClass("changing");
        }, _duration);
    }
    function flipNum(obj, num) {
        if (Number(num) !== Number(obj.children(".current.top").html())) {
            obj.children(".next").html(num);
            obj.addClass("changing");
            setTimeout(function () {
                obj.children(".current").html(num);
            }, _duration * 0.5);
        }
    }
    function showPage(pageC, pageO, callback) {
        var duration = 0;
        pageC.fadeOut(duration);
        pageO.fadeIn(duration);
        if (callback) {
            setTimeout(callback(), duration);
        }
    }
    function share_handler() {
        ishare.content.link = ishare.url + 'index.html?num=' + (_lightp + 1);
        ishare.content.image ='http://img.cdn.be-xxx.com/spdbank-children/images/share.jpg';
        ishare.content.title = "我是第" + (_lightp + 1) + "位爱心接力者，我把爱心攒成力量，为了我们共同的宝贝。";
        ishare.content.friend = "让爱点亮希望，为了我们共同的宝贝 ！";
        ishare.content.timeline = "我是第" + (_lightp + 1) + "位爱心接力者，我把爱心攒成力量，为了我们共同的宝贝。";
        ishare.content.other = "我是第" + (_lightp + 1) + "位爱心接力者，我把爱心攒成力量，为了我们共同的宝贝。";
        if (os.weixin) {
            wx.ready(function () {
                ishare.wxShare();
            });//end wx.ready
            ishare.wxShareSuccess = function () {//分享成功后回调函数
                alert(share.content.link);
                location.href = 'index.html';
            }//end func;
        }//end if
        else
            ishare.wbShare({url: ishare.content.link, text: ishare.content.other, image: ishare.content.image});

    }//edn func


    //----------------------------------------加载声音及处理----------------------------------------


    function sound_handler() {

        if (os.weixin)
            wx.ready(sound_creat);
        else {
            if (os.test)
                sound_creat();
            else if (bgmBtn.length > 0)
                bgmBtn.addClass('bgmStop').one('touchend', sound_creat);//手机非微信环境
        }//end else
    }//end func
    function sound_creat() {
        if (!os.weixin && bgmBtn.length > 0)
            bgmBtn.off('touchend', sound_creat);
        soundList.bgm = iaudio.on('http://img.cdn.be-xxx.com/spdbank-children/sound/bgm.mp3', {loop: true, onLoaded: sound_loaded});
    }//end func
    function sound_loaded() {

        if (soundList.bgm)
            bgm_init();
    }//end func

    function bgm_init() {
        bgmPlay = sessionStorage.bgmPlay;
        bgmPlay = bgmPlay || 1;
        bgmPlay = parseInt(bgmPlay);
        bgmTime = sessionStorage.bgmTime;
        bgmTime = bgmTime || 0;
        bgmTime = Number(bgmTime);
        if (bgmBtn.length > 0)
            bgmBtn.show();
        if (bgmPlay == 1)
            bgm_play();
        else
            bgm_stop();
    }//end func
    function bgm_play() {
        soundList.bgm.currentTime = bgmTime;
        console.log("bgmTime:" + bgmTime);
        soundList.bgm.play();
        bgmPlay = 1;
        if (bgmBtn.length > 0)
            bgmBtn.removeClass('bgmStop').addClass('bgmPlay').one('touchend', bgm_stop);
    }//end func

    function bgm_stop() {
        bgmTime = bgmPlay ? soundList.bgm.currentTime : bgmTime;
        soundList.bgm.pause();
        bgmPlay = 0;
        if (bgmBtn.length > 0)
            bgmBtn.removeClass('bgmPlay').addClass('bgmStop').one('touchend', bgm_play);
    }//end func

    //----------------------------------------页面监测代码----------------------------------------
    function monitor_handler() {
        imonitor.add({obj: $(".page5 .btn1 img"), action: 'touchend', category: '首页', label: '我用金豆点亮爱'});
        imonitor.add({obj: $(".page5 .btn2 img"), action: 'touchend', category: '首页', label: '我用祝福点亮爱'});
        imonitor.add({obj: $(".page5 .btn3"), action: 'touchend', category: '首页', label: '我用金豆点亮爱-确认提交'});
        imonitor.add({obj: $(".page5 .btn4"), action: 'touchend', category: '首页', label: '我用祝福点亮爱-确认提交'});
        imonitor.add({obj: $(".page5 .img1"), action: 'click', category: '首页', label: '活动规则'});
        imonitor.add({obj: $(".page6 .btn1"), action: 'touchend', category: '首页', label: '进入"金豆公益"平台'});
        imonitor.add({obj: $(".page6 .btn2"), action: 'touchend', category: '首页', label: '查看祝福墙'});
        imonitor.add({obj: $(".page6 .btn3"), action: 'touchend', category: '首页', label: '传递祝福积攒爱'});
    }//end func
    window.flipNums = flipNums;
});//end ready
