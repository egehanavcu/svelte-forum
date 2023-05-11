import { writable } from "svelte/store";

export const UIStore = writable({
  initialRender: true,
  windowWidth: null,
  isSmallScreen: null,
  isLoginOpen: false,
  breadcrumbList: [],
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
