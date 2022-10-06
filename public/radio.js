var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

$(document).ready(function () {


  for (let i = 0; i < 7; i++) {

    console.log(days[i]);
    loadData(days[i]);

  }

});


function loadData(day) {

  $.getJSON("./radio/" + day + ".json", function (data) {
    //    console.log(data);

    $.each(data, function (i, d) {

      let v = `
      <div class="block" curr="1">
        <div class="_b block1" time">` + d.time + `</div>
        <div class="_b block2" desc">
        <p>` + d.name + `</p></div>
        <div class="_b block3" audio>
          <audio controls>
      <source src="` + d.audio + `" type="audio/mp3">
          </audio>
        </div>
        <div class="_b block4" image>
        <img src="` + d.image + `">
        </div>
      </div>
      `

      $(".day[data-day='" + day + "'] > .blocks").append(v);
    });

    $(".day[data-day='" + day + "'] > .blocks").on("click", ".block", function () {

      console.log($(this).attr("curr"));

      let curr = parseInt($(this).attr("curr"));

      if (curr == 4) {
        curr = 1;
        $(this).attr("curr", 1);
      } else {
        curr++;
        $(this).attr("curr", curr);
      }

      $(this).css("background", "red");

      //      console.log($(this).children());
      $(this).children().hide();
      $(this).children("._b.block" + curr).show();

    });

  }).fail(function () {
    console.log("An error has occurred.");
  });

}
