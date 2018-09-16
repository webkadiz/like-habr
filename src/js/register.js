import "../css/normalize";
import "../css/fontello";
import "../sass/register";

import $ from "jquery/dist/jquery.min";

$(".switch input").change(e => {
  console.log("sw");
  if ($(e.target).hasClass("js-entry")) {
    $(".switch__slider").css({
      width: $(".switch__entry").outerWidth(),
      left: 0
    });
  } else if ($(e.target).hasClass("js-register")) {
    //prettier-ignore
    $(".switch__slider").css({
			width: $(".switch__register").outerWidth(),
			left: $(".switch__slider").parent().width() - $(".switch__register").outerWidth()
    })
  }
});

$(".switch input").change();
