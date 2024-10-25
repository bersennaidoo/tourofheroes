$(function () {
  var $isOpen = false;

  $(".c-navp__toggle").on("click", function(e) {
    e.preventDefault()
    if ($isOpen === false) {
        $(".c-navp__dropdown").css("display", "block")
        $isOpen = true
    } else {
        $(".c-navp__dropdown").css({display: "none"})
        $isOpen = false
    }
  })
});
