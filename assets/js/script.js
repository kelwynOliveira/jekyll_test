import MenuMobile from "./modules/menu-mobile.js";
import initFetchSocials from "./modules/socials.js";

initFetchSocials();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
