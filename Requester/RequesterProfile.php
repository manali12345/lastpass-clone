<?php
define('TITLE', 'Requester Profile');
define('PAGE', 'RequesterProfile');
include('includes/header.php');
include('../dbConnection.php');
session_start();
if ($_SESSION['is_login']) {
  $rEmail = $_SESSION['rEmail'];
} else {
  echo "<script> location.href='RequesterLogin.php'; </script>";
}
?>

<script type="text/javascript" src="../js/sjcl.js"></script>
<script type="text/javascript" src="../js/vault.js"></script>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/main.js"></script>
<script>
  window.onload = function() {
    populate();
  }
</script>
<div class="col-sm-6 mt-5">
  <form class="mx-5" method="POST">
    <div class="container" style="width:700px;">
      <h3 align="center">Password Vault</h3><br />
      <?php
      // $sql = "SELECT * from users where r_email = '$rEmail'";

      // $result = $conn->query($sql);
      // if ($result->num_rows == 1) {
      //   $row = $result->fetch_assoc();
      //   $login_id = $row['r_login_id'];
      //   $vault = $row['enc_vault'];
      //   echo "<script>populate();</script>";
      // $query = "SELECT * FROM users where login_id = '$login_id'";
      // $result = $conn->query($query);
      // if (mysqli_num_rows($result) > 0) {

      ?>
      <div class="container" id="vaultContainer">
        <!-- <div class="row"> -->
        <!-- <?php

              // while ($rows = mysqli_fetch_array($result)) {
              ?>

                <div class="col-lg-4 mb-4">

                  <div style="border:1px solid #333; background-color:#f1f1f1; border-radius:5px; padding:16px;" align="center">
                    <h4 class="text-info"><?php echo $rows["title"]; ?></h4>
                    <h4 class="text-danger"><?php echo $rows["password"]; ?></h4>
                  </div>

                </div>

              <?php
              // }
              ?> -->
        <!-- </div> -->
      </div>
      <?php
      // }
      // }

      ?>

    </div>
  </form>
</div>
<!-- </div>
</div> -->
<?php
include('includes/footer.php');
?>