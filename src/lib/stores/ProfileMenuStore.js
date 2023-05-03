import { writable } from "svelte/store";

export const profileMenuStore = writable({
  isMenuOpen: false,
  closeMenu: () => {
    document.querySelector("#menu").classList.remove("md:px-4", "md:py-2");
    document.querySelector("#menu").style.width = null;
  },
});
