<?php include('header.php') ?>
<section class="questions">
  <div class="row">
    <div class="col-md-8">
      <div class="card card-cascade narrower">
        <!-- Card image -->
        <div class="view view-cascade gradient-card-header purple-gradient">
          <!-- Title -->
          <h2 class="card-header-title">JLPT N5 MOdel Question</h2>
        </div>
        <!-- Card content -->
        <div class="card-body card-body-cascade">
          <?php
          for ($i=1; $i <= 10; $i++) {

            ?>
            <div class="question-1">
              <h5>Q.<?php echo $i; ?>) This is 質問番号 <?php echo $i; ?></h5>
              <!-- Material inline 1 -->
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" id="<?php echo $i; ?><?php echo $i*2; ?>" name="question<?php echo $i; ?>">
                <label class="form-check-label" for="<?php echo $i; ?><?php echo $i*2; ?>">Answer 1</label>
              </div>
              <!-- Material inline 2 -->
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" id="<?php echo $i; ?><?php echo $i*3; ?>" name="question<?php echo $i; ?>">
                <label class="form-check-label" for="<?php echo $i; ?><?php echo $i*3; ?>">Answer 2</label>
              </div>
              <!-- Material inline 3 -->
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" id="<?php echo $i; ?><?php echo $i*4; ?>" name="question<?php echo $i; ?>">
                <label class="form-check-label" for="<?php echo $i; ?><?php echo $i*4; ?>">Answer 3</label>
              </div>
              <!-- Material inline 3 -->
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" id="<?php echo $i; ?><?php echo $i*5; ?>" name="question<?php echo $i; ?>">
                <label class="form-check-label" for="<?php echo $i; ?><?php echo $i*5; ?>">Answer 4</label>
              </div>
            </div>
            <hr>
          <?php } ?>
        </div>

        <nav>
          <ul class="pagination pg-purple justify-content-center">
            <li class="page-item">
              <a class="page-link waves-effect waves-effect" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link waves-effect waves-effect">1</a></li>
            <li class="page-item"><a class="page-link waves-effect waves-effect">2</a></li>
            <li class="page-item"><a class="page-link waves-effect waves-effect">3</a></li>
            <li class="page-item"><a class="page-link waves-effect waves-effect">4</a></li>
            <li class="page-item"><a class="page-link waves-effect waves-effect">5</a></li>
            <li class="page-item">
              <a class="page-link waves-effect waves-effect" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-cascade narrower">

        <!-- Card image -->
        <div class="view view-cascade gradient-card-header purple-gradient">

          <!-- Title -->
          <h2 class="card-header-title">Index</h2>
        </div>

        <!-- Card content -->
        <div class="card-body card-body-cascade text-center">
          <style>
          .flex-container {
            display: flex;
            flex-wrap: wrap;
          }
          </style>
          <div class="flex-container">
            <div>
              <button type="button" class="btn btn-info btn-md" disabled>Answered</button>
            </div>
            <div>
              <button type="button" class="btn btn-danger btn-md" disabled>Unanswered</button>
            </div>
          </div>
          <hr>
          <div class="flex-container">
            <?php for ($i=1; $i <= 50; $i++) {
              ?>
              <div>
                <button type="button" class="btn btn-danger btn-sm" style="width:70px;" disabled><?php echo $i*1; ?></button>
              </div>
              <div class="">
              <button type="button" class="btn btn-info btn-sm" style="width:70px;" disabled><?php echo $i*2; ?></button>

            </div>
            <?php } ?>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<?php include('footer.php') ?>
