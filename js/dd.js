window.onload = function() {
    // $('#ton').animate({color:'#8B4513',opacity:'0.6'},"slow");
    var images = [];
    for(var i=1;i<=3;i++){
     images[i] = 'img/bird' + i + '.png';

    }
    //console.log(images);
    var fish = document.getElementById('fish');
    var index = 1;
    setInterval(function(){
    index++;
    // 如果图片下标的位置大于图片数组的长度，重置为0
    if (index >= images.length){
    index = 1;
    }
    fish.src = images[index];
    // fish.style.left = parseInt(fish.style.left) + 1 + 'px';
    }, 1000/10);
    var now = 0;
    var timer = setInterval(function() {
    if(now == 100) {
        clearInterval(timer);
        // ddd();
        window.location.href = '#';
    } else {
            now += 1;
            /*progressfn(now);*/
            // document.getElementById('ton').setAttribute('class','none');
            }
    }, 50);
     var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    $('#st-control-4').click(function(){
        $('#dowebok').addClass('animated bounceInRight');
        setTimeout(function(){
            $('#dowebok').removeClass('animated bounceInRight');
        },3000);
    });
}