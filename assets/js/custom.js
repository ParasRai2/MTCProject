
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})


//img Upload
function showMyImage1(fileInput) {
       var files = fileInput.files;
       for (var i = 0; i < files.length; i++) {
           var file = files[i];
           var imageType = /image.*/;
           if (!file.type.match(imageType)) {
               continue;
           }
           var img=document.getElementById("thumbnail1");
           img.file = file;
           var reader = new FileReader();
           reader.onload = (function(aImg) {
               return function(e) {
                   aImg.src = e.target.result;
               };
           })(img);
           reader.readAsDataURL(file);
       }
   }
    function showMyImage2(fileInput) {
       var files = fileInput.files;
       for (var i = 0; i < files.length; i++) {
           var file = files[i];
           var imageType = /image.*/;
           if (!file.type.match(imageType)) {
               continue;
           }
           var img=document.getElementById("thumbnail2");
           img.file = file;
           var reader = new FileReader();
           reader.onload = (function(aImg) {
               return function(e) {
                   aImg.src = e.target.result;
               };
           })(img);
           reader.readAsDataURL(file);
       }
   }


	 //Animation init
 	new WOW().init();

 	//Modal
 	$('#myModal').on('shown.bs.modal', function () {
 			$('#myInput').focus()
 	})

 	// Material Select Initialization
 	$(document).ready(function () {
 			$('.mdb-select').material_select();
 	});



	$(function () {
			var selectedClass = "";
			$(".filter").click(function () {
					selectedClass = $(this).attr("data-rel");
					$("#gallery").fadeTo(100, 0.1);
					$("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
					setTimeout(function () {
							$("." + selectedClass).fadeIn().addClass('animation');
							$("#gallery").fadeTo(300, 1);
					}, 300);
			});
	});



	// SideNav Initialization
	$(".button-collapse").sideNav();

	var container = document.querySelector('.custom-scrollbar');
	Ps.initialize(container, {
		wheelSpeed: 2,
		wheelPropagation: true,
		minScrollbarLength: 20
	});

	// Data Picker Initialization
	$('.datepicker').pickadate();

	// Material Select Initialization
	$(document).ready(function () {
		$('.mdb-select').material_select();
	});

	// Tooltips Initialization
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})



	// Small chart
	$(function () {
		$('.min-chart#chart-sales').easyPieChart({
			barColor: "#FF5252",
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	});

	//Main chart
	var ctxL = document.getElementById("lineChart").getContext('2d');
	var myLineChart = new Chart(ctxL, {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				fillColor: "#fff",
				backgroundColor: 'rgba(255, 255, 255, .3)',
				borderColor: 'rgba(255, 255, 255)',
				data: [0, 10, 5, 2, 20, 30, 45],
			}]
		},
		options: {
			legend: {
				labels: {
					fontColor: "#fff",
				}
			},
			scales: {
				xAxes: [{
					gridLines: {
						display: true,
						color: "rgba(255,255,255,.25)"
					},
					ticks: {
						fontColor: "#fff",
					},
				}],
				yAxes: [{
					display: true,
					gridLines: {
						display: true,
						color: "rgba(255,255,255,.25)"
					},
					ticks: {
						fontColor: "#fff",
					},
				}],
			}
		}
	});



	// Material Design example
	$(document).ready(function () {
	$('#dtMaterialDesignExample').DataTable();
	$('#dtMaterialDesignExample_wrapper').find('label').each(function () {
	$(this).parent().append($(this).children());
	});
	$('#dtMaterialDesignExample_wrapper .dataTables_filter').find('input').each(function () {
	$('input').attr("placeholder", "Search");
	$('input').removeClass('form-control-sm');
	});
	$('#dtMaterialDesignExample_wrapper .dataTables_length').addClass('d-flex flex-row');
	$('#dtMaterialDesignExample_wrapper .dataTables_filter').addClass('md-form');
	$('#dtMaterialDesignExample_wrapper select').removeClass(
	'custom-select custom-select-sm form-control form-control-sm');
	$('#dtMaterialDesignExample_wrapper select').addClass('mdb-select');
	$('#dtMaterialDesignExample_wrapper .mdb-select').materialSelect();
	$('#dtMaterialDesignExample_wrapper .dataTables_filter').find('label').remove();
	});
	</script>
	<script type="text/javascript">
	var ctxL = document.getElementById("lineChart1").getContext('2d');
	var myLineChart = new Chart(ctxL, {
	type: 'line',
	data: {
	  labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
	  datasets: [{
	    fill: false,
	    borderColor: "#673ab7",
	    pointBackgroundColor: "#673ab7",
	    data: [885, 884, 887, 883, 888, 889, 888]
	  }]
	},
	options: {
	  responsive: false,
	  legend: {
	    display: false
	  },
	  elements: {
	    line: {
	      tension: 0.0
	    }
	  },
	  scales: {
	    xAxes: [{
	      gridLines: {
	        display: false,
	      },
	      ticks: {
	        padding: 15,
	        height: 30
	      }
	    }],
	    yAxes: [{
	      gridLines: {
	        drawBorder: false
	      },
	      ticks: {
	        maxTicksLimit: 5,
	        padding: 15,
	        min: 880,
	        max: 890
	      }
	    }]
	  }
	}
	});
