import "../css/normalize";
import "../css/fontello";
import "../sass/main";
import $ from "jquery";

import "components/header/header.js";
import "components/sidebar/sidebar.js";
import "components/subfooter/subfooter.js";
import "components/footer/footer.js";

let templates = [
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
  "sidebar-list",
  "filter-time",
  "filter-post"
];

function importInit() {
  for (let template of templates) {
    require(`../blocks/${template}/${template}.sass`);
    require(`../blocks/${template}/${template}.js`);
  }
}

importInit();
