import "../css/normalize";
import "../css/fontello";
import "jquery-selectric/src/selectric.scss";
import "../sass/main";
import "../sass/write";
import $ from "jquery";
import "jquery-selectric";

$(".enter__category, .enter__marks").selectric({
  maxHeight        : 400,
  arrowButtonMarkup: "<div class='selectric-arrow'></div>"
});
