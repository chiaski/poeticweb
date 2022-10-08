var c = 0;

var when = ["that,", "that,", "um,", "that you had,", "uh", "that you had to", "you could", "you do", "you wit", "you wa", "you could do so", "you do you could", "you want", "you wanted him to do you so much you could do anything?"];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
// shuffle(when);


$(document).click(function (e) {
  // check for tap
  if (e.button == 0) {


    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++; // goes to next entry in list of texts

    // when finished
    if (c == when.length) {

      $("<p>, when you </p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      // disable clicks
      $(document).unbind("click");

    }
  }
});