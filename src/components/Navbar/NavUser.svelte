<script>
  import { profileMenuStore } from "../../lib/stores/ProfileMenuStore";
  import { UIStore } from "../../lib/stores/UIStore";
  import ExpandMoreIcon from "../Icons/ExpandMoreIcon.svelte";

  const toggleProfileMenu = () => {
    if ($profileMenuStore.isMenuOpen) {
      $profileMenuStore.closeMenu();
    } else {
      if ($UIStore.isSmallScreen) {
        document.querySelector("#menu").style.width = "100%";
      } else {
        document.querySelector("#menu").classList.add("md:px-4", "md:py-2");
        document.querySelector("#menu").style.width = "auto";
      }
    }
    $profileMenuStore.isMenuOpen = !$profileMenuStore.isMenuOpen;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  class="inline-block text-neutral-400 hover:text-white align-middle fill-neutral-400 hover:fill-white"
  on:click={toggleProfileMenu}
>
  <span class="hidden md:inline-block">Egehan</span>
  <img
    src="https://i.pinimg.com/280x280_RS/dc/bc/a6/dcbca671536e67f84dccecd3fce252be.jpg"
    class="inline-block md:hidden w-8 rounded-full border-2 border-neutral-400 hover:border-white"
    alt="profile"
  />
  <ExpandMoreIcon className="inline-block ml-0.5 w-4" />
</span>
