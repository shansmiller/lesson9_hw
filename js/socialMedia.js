$(document).ready(function(){
	//alert used to test to see if javaScript is working
	//alert(":)");
	
	//example of animating
	$("#topDIV").animate({ top:"-=150px"
	},3000);
	$("#bottomDIV").animate({ bottom:"-=150px"
	},3000);
    //example of rotation and click
	
	$("#socialIcons img").click(function(){
		var tik = 0; 
		//console log to trouble shoot this
		//console.log($(this));

		
		//fade out used to trouble shoot and test when rotation wasn't working
		//$(this).fadeOut();
		//console to test if clock is working
				//console.log(":)")
			
		var myObj = $(this)

		//console.log(tik);

		var timer = setInterval( function(){ 
				
			if(tik >= 360){
				tik = 0;
				console.log(":D")
			}else{
				tik++;
				console.log(":)")
				}
				
			//console.log($(this))
			rotationAnimation( myObj, tik )

			}, 12/1000);




	}); 

	function rotationAnimation( obj, degrees ){
		$(obj).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});

	} 


});

