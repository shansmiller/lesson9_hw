$(document).ready(function(){
	var counter 	= 3;
	var dt 			= new Date();
	var h 			= dt.getHours();
	var m   		= dt.getMinutes();
	var s   		= dt.getSeconds();
	var timeOut;
	var timer;
	var cd; //COUNTDOWN INTERVAL
	var secondCounter = 0;
	var minuteCounter = 0;


	$("#startGame").click(function(){
		startCountDown();
	});

	function startCountDown(){

		cd = setInterval(function(){
			console.log(counter);
			$("#startGame").html( counter );
			counter--;
		} , 1000);

		timeOut = setTimeout( function(){
			console.log("TIME's UP !");
			clearInterval( cd );
			updateClockView();
			startTimer();
			hideStart();
			showClock();
			hideStart();
		}, 3000);

	}

	function updateClockView(){
		$("#h").html( fixNumber( h ) );
		$("#m").html( fixNumber( m ) );
		$("#s").html( fixNumber( s ) );
	}

	function showClock(){
		$("#clock").show();
	}

	function hideStart(){
		$("#startGame").hide()
	}

	function startTimer(){
	 timer = setInterval( function(){
		giveMeTheTime();
		updateClockView();
		counterHandler();
		handleUIUX();
		}, 1000 );
	}
	setTimeout(handleUIUX, 60000);

	function counterHandler(){
		if(m < 60 ){
			minuteCounter++;
		}else{
			minuteCounter = 0;
		}
	}

	function handleUIUX(){
		if( m % 2 === 0){
			$("#clock").css( 'background', 'black' );
			$("#clock").css( 'color', '#24FF00' );
			console.log ( m + "it's even" );
		}else{
			console.log( m + "it's odd" );
			$("#clock").css( 'background', '#24FF00' );
			$("#clock").css( 'color', 'black' );
		}
		

	}

	function giveMeTheTime(){
		dt 	= new Date();
		h 	= dt.getHours();
		m   = dt.getMinutes();
		s   = dt.getSeconds();
		//console.log( h );
		//console.log( m );
		//console.log( s );

		

	}

	function fixNumber( num ){
		if( num < 10 ){
			num = "0"+num;
		}
		return num;
	}

		 $(".circle").hover(function(){
		  $(this).css("width","70px")
		  
		 },function(){
		 	$(this).css("width","60px")
		 })

});