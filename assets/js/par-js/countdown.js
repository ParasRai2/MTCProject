
var clock;
var currentTime;
var startTime;
var diff;


$(document).ready(function() {
	currentTime = new Date();
	startTime = new Date("June 6, 2019 06:40:00");
	diff = (startTime - currentTime)/1000;
	diff =10;
	if(diff<0)
		$(".message").html("No Timing");
	else
	{
		clock = $('.clock').FlipClock( parseInt(diff), {
	        clockFace: 'MinuteCounter',
	        countdown: true,
	        callbacks: {
	        	stop: function() {
	        		var url = "student-info.php";
					$(location).prop('href',url);
	        	}
	        }
	    });
	}
});