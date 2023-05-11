import { writable } from "svelte/store";

export const UIStore = writable({
  initialRender: true,
  windowWidth: null,
  isSmallScreen: null,
  isLoginOpen: false,
  breadcrumbList: [],

  slugToTitle: (slug) => {
    var words = slug.split("-");
    var title = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return title.join(" ");
  },

  getWidth: () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  },
});
