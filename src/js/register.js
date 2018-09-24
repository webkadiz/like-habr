import "../css/normalize";
import "../css/fontello";
import "../sass/register";

import $ from "jquery/dist/jquery.min";

class Switcher {
  //prettier-ignore
  constructor({containerClass, switcherClass, activeClass, sliderClass, dataAttr}) {
    this.containerClass = containerClass;
    this.switcherClass  = switcherClass;
    this.activeClass    = activeClass;
    this.sliderClass    = sliderClass;
    this.dataAttr       = dataAttr;
    this.container      = document.querySelector(containerClass);
    this.switcher       = this.container.querySelectorAll(switcherClass);
    this.active         = this.container.querySelector(activeClass);
    this.slider         = this.container.querySelector(sliderClass);
    this.callback       = () => {};
  }
  init() {
    this.active && this.update(this.active);

    this.container.addEventListener("click", e => {
      let target;
      if ((target = e.target.closest(this.switcherClass))) {
        //prettier-ignore
        Array.from(this.switcher, target => target.classList.remove(this.activeClass.slice(1)));
        target.classList.add(this.activeClass.slice(1));
        this.update(target);
      }
    });
  }
  update(elem) {
    this.slider.style.left  = elem.offsetLeft + "px";
    this.slider.style.width = elem.clientWidth + "px";
    this.data               = elem.getAttribute(this.dataAttr);
    this.callback();
  }
  bind(callback) {
    this.callback = callback;
  }
  get getData() {
    return this.data;
  }
}

let switcher = new Switcher({
  containerClass: ".switch",
  switcherClass : ".switch__input",
  activeClass   : ".switch__active",
  sliderClass   : ".switch__slider",
  dataAttr      : "data-switch"
});
//prettier-ignore
switcher.bind(function() {
  if (this.getData === "entry") $(".form").addClass("form-entry").removeClass("form-register");
  else if (this.getData === "register") $(".form").addClass("form-register").removeClass("form-entry");
});

switcher.init();

//prettier-ignore
$(".form__enter").focus(e => $(e.target).prev().addClass("form__label-active"));
//prettier-ignore
$(".form__enter").blur(e => e.target.value === '' && $(e.target).prev().removeClass("form__label-active"));

//prettier-ignore
$(".main").css({top:(document.documentElement.clientHeight -($(".main").height() + $(".form__register").outerHeight(true))) / 2})
//prettier-ignore
window.onresize = e => $(".main").css({top:(document.documentElement.clientHeight -($(".main").height() + $(".form__register").outerHeight(true))) / 2})
