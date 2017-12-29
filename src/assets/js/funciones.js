//version final
$(document).ready(function(){
    //$('select').material_select('destroy');	
  
    console.log("jquery document.ready iniciado");
    $('.tooltipped').tooltip({delay: 50, html: true});
    $('ul.tabs').tabs({
        swipeable : false
    }); 
    $(".marca").click(function(){
       // alert("clikeado");
    });

//$(".loading").hide();
//$("main").fadeIn("fast"); 
   // equiposrelacionados();
    /*function loading() {
        $(".loading").hide();
        $("main").fadeIn("fast");    
    }*/

   


    $(window).scroll(function(){
        var margen = self.pageYOffset;
        if(margen >= 107){
            //$("header").addClass("fixed");
            $("header").stop().animate({'margin-top':'-36px'},40);
  
        }else{
            $("header").stop().animate({'margin-top':'0px'},80);
        }
    });/**/


	function menumobile (tipo){
		$('.iconmenu').click(function(){
		  $(".menuprincipal .tabs").slideToggle("fast");
		});

		$('.menuprincipal .tabs li a').click(function(){
    		$(".iconmenu").click();
    		$("html, body").animate({ scrollTop: "0px" });
		});
	}

    if ($(window).width() < 720){
		menumobile(1);
	};/**/

	$('.modal').modal();

    //deteccion direccion vertical scroll
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        
        if (st > lastScrollTop){
            $("#subir").stop().fadeOut(50)
        
        } else {
            $("#subir").stop().fadeTo(50, 0.6 );
        }
        if (st < 360){
            $("#subir").stop().fadeOut(50)
        }
        lastScrollTop = st;
    });

    //Scroll animado
    function subir(){
        $("#subir").click(function(){
            $("html, body").animate({ scrollTop: "0px" });
        });
    }

    subir();

	//$('.tap-target').tapTarget();
	$('#modal').modal();

    //
    setTimeout(function(){
        $('select').material_select();
      },200);
   
   
       
});




$(window).on('load', function () {

    //$('select').material_select();
  


});

