document.addEventListener('DOMContentLoaded',function(){
    var nut = document.getElementsByClassName('nut');
    var den = document.getElementsByClassName('den');
    var ls = document.getElementsByClassName('left-sidebar-small');
    var l = document.getElementsByClassName('left-sidebar');
    var rnut = document.getElementsByClassName('right-nut');
    var rden = document.getElementsByClassName('right-den');
    var rs = document.getElementsByClassName('right-sidebar-small');
    var r = document.getElementsByClassName('right-sidebar');
    //da sua
    var seek = document.getElementsByClassName('seek');
    var sf =document.getElementsByClassName('seek-form');
    var inform = document.getElementsByClassName('inform');
    var informres = document.getElementsByClassName('inform-res')
    inform[0].onclick = function(){
        informres[0].classList.toggle('hien-res');
        informres[1].classList.remove('hien-res');
        informres[2].classList.remove('hien-res');
        sf[0].classList.remove('hien-res');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
    }
    inform[1].onclick = function(){
        informres[1].classList.toggle('hien-res');
        informres[0].classList.remove('hien-res');
        informres[2].classList.remove('hien-res');
        sf[0].classList.remove('hien-res');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
    }
    inform[2].onclick = function(){
        informres[2].classList.toggle('hien-res');
        informres[1].classList.remove('hien-res');
        informres[0].classList.remove('hien-res');
        sf[0].classList.remove('hien-res');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
    }
    seek[0].onclick = function(){
        sf[0].classList.toggle('hien-res');
        informres[0].classList.remove('hien-res');
        informres[1].classList.remove('hien-res');
        informres[2].classList.remove('hien-res');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
    }
    //het sua
    nut[0].onclick = function(){
        ls[0].classList.remove('stop');
        ls[0].classList.add('close-left-small');
        ls[0].classList.remove('open-left-small');
        l[0].classList.remove('close-left');
        l[0].classList.add('open-left');
        l[0].classList.remove('hiden-left-sidebar');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
    }
    nut[1].onclick = function(){
        ls[0].classList.remove('stop');
        ls[0].classList.add('close-left-small');
        ls[0].classList.remove('open-left-small');
        l[0].classList.remove('close-left');
        l[0].classList.add('open-left');
        l[0].classList.remove('hiden-left-sidebar');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
    }
    den[0].onclick = function(){
        ls[0].classList.remove('stop');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
    }
    rnut[0].onclick = function(){
        rs[0].classList.remove('stop');
        rs[0].classList.add('close-right-small');
        rs[0].classList.remove('open-right-small');
        r[0].classList.remove('close-right');
        r[0].classList.add('open-right');
        r[0].classList.remove('hiden-right-sidebar');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
    }
    rnut[1].onclick = function(){
        rs[0].classList.remove('stop');
        rs[0].classList.add('close-right-small');
        rs[0].classList.remove('open-right-small');
        r[0].classList.remove('close-right');
        r[0].classList.add('open-right');
        r[0].classList.remove('hiden-right-sidebar');
        ls[0].classList.remove('close-left-small');
        ls[0].classList.add('open-left-small');
        l[0].classList.remove('open-left');
        l[0].classList.add('close-left');
    }
    rden[0].onclick = function(){
        rs[0].classList.remove('stop');
        rs[0].classList.remove('close-right-small');
        rs[0].classList.add('open-right-small');
        r[0].classList.remove('open-right');
        r[0].classList.add('close-right');
    }
},false)



//show comment
$(function(){
    $('.comment').on('click', function () {
        $(this).parents(".post-meta").siblings(".coment-area").toggle("normal");
    })
})
//post-comment
// jQuery(".post-comt-box textarea").on("keydown", function(event) {

// 	if (event.keyCode == 13) {
// 		var comment = jQuery(this).val();
// 		var parent = jQuery(".showmore").parent("li");
// 		var comment_HTML = '<li style="display: inline-block;"><div class="comet-avatar"><img alt="" src="img/avt-04.webp"></div><div class="we-comment"><h5><a title="" href="time-line.html">Nguyễn Lương Cảnh</a></h5><p>'+comment+'</p><div class="inline-itms"><a title="Reply" href="#" class="we-reply"><i class="fa fa-reply"></i><span>0</span></a><a title="" href="#"><i class="fa fa-heart"></i><span>0</span></a></div></div></li>';
// 		$(comment_HTML).insertBefore(parent);
// 		jQuery(this).val('');
// 	}
// }); 
//hien them comment
$(function(){
    $('li.showmore').on('click', function () {
        console.log($(this).siblings());
        $(this).siblings().slice(2,4).show("normal");
    })
})
//hien them bai viet
$(function () {
    $(".loadMore .central-meta, .postbox").slice(0, 3).show();
    $(".btn-load-more").on('click', function (e) {
        $(".loadMore .central-meta:hidden").slice(0, 2).show("normal");
        if($(".loadMore .central-meta:hidden").length == 0){
            $(".btn-load-more").hide("fast");
            $(".btn-to-back").fadeIn();
        }
    });
});
// ve dau trang
$('.btn-to-back').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    $(".loadMore .central-meta, .postbox").slice(3,$(".loadMore .central-meta, .postbox").length).hide(1000);
    $(".btn-to-back").fadeOut(1000);
    $(".btn-load-more").show();
});

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });
