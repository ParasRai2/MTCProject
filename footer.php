
<!-- JQuery -->
<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="assets/js/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="assets/js/mdb.min.js"></script>
<!-- Initializations -->
<script type="text/javascript" src="assets/js/custom.js"></script>
<!-- data-table -->
<script type="text/javascript" src="assets/js/addons/datatables.min.js"></script>
<!-- owl Carousel -->
<script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
<!-- flipclock -->
<script src="compiled/flipclock.js"></script>

<script type="text/javascript">
  var clock;
  var currentTime;
  var startTime;
  var diff;
  $(document).ready(function() {
    currentTime = new Date();
    startTime = new Date("June 10, 2019 06:35:00");
    diff = (startTime - currentTime)/1000;
    clock = $('.clock').FlipClock( parseInt(diff), {
          clockFace: 'MinuteCounter',
          countdown: true,
          callbacks: {
            stop: function() {
              $('.message').html('The clock has stopped!');
            }
          }
      });
  });

</script>
</body>
</html>
