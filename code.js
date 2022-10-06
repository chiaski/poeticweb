$("#one #links a").click(function () {

  let jump = $(this).attr("data-jump");

  document.querySelector('#' + jump).scrollIntoView({
    behavior: 'smooth'
  });

});
