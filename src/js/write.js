import "../css/normalize";
import "../css/fontello";
import "../sass/main";
import $ from "jquery";
import "jquery-selectric/src/selectric.scss";
import "../sass/write";
import "jquery-selectric";

$(".enter__category, .enter__marks").selectric({
 maxHeight        : 400,
 arrowButtonMarkup: "<div class='selectric-arrow'></div>"
});
