import { writable } from "svelte/store";

export const profilePreviewStore = writable({
  usernameDOM: "",
  profileCardDOM: "",
  arrowDOM: "",
  xPosition: 0,
  isPreviewFromLeft: null,
  openProfilePreview: function () {
    this.profileCardDOM.style.top = `calc(${
      document.querySelector("html").scrollTop +
      this.usernameDOM.getBoundingClientRect().bottom
    }px + 0.5rem)`;

    if (this.isPreviewFromLeft) {
      this.profileCardDOM.style.left = `${
        this.usernameDOM.getBoundingClientRect().left
      }px`;
      this.arrowDOM.style.left = `calc(${this.xPosition}px - 0.5rem)`;
    } else {
      this.profileCardDOM.style.left = `${
        this.usernameDOM.getBoundingClientRect().right -
        this.profileCardDOM.getBoundingClientRect().width
      }px`;
      this.arrowDOM.style.right = `calc(${this.xPosition}px - 0.5rem)`;
    }
  },
});
