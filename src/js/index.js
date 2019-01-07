import "../css/normalize";
import "../css/fontello";
import "../sass/main";
import $ from "jquery";

let templates = [
 "header",
 "menu",
 "button-acute",
 "button-press",
 "search",
 "article",
 "post-preview",
 "post-author",
 "post-img",
 "post-desc",
 "box-icon",
 "pagination",
 "slashed",
 "sidebar-list",
 "sidebar",
 "filter-time",
 "filter-post",
 "footer"
];
let b = `../blocks`;

function importInit() {
 for (let template of templates) {
  require(`../blocks/${template}/${template}.sass`);
  require(`../blocks/${template}/${template}.js`);
 }
}

importInit();
