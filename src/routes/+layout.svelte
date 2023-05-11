<script>
  import { onMount } from "svelte";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import "../app.css";

  import { fly } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";

  import { UIStore } from "../lib/stores/UIStore";
  import { profileMenuStore } from "../lib/stores/ProfileMenuStore";
  import { profilePreviewStore } from "../lib/stores/ProfilePreviewStore";

  import Footer from "../components/Footer/Footer.svelte";
  import NavBar from "../components/Navbar/NavBar.svelte";
  import NavLoginForm from "../components/Navbar/NavLoginForm.svelte";
  import Loader from "../components/UI/Loader.svelte";

  let isPageLoading = false;

  const handleResize = () => {
    $UIStore.windowWidth = $UIStore.getWidth();
    $UIStore.isSmallScreen = !window.matchMedia("(min-width: 768px)").matches;
    if ($profileMenuStore.isMenuOpen) {
      if ($UIStore.isSmallScreen) {
        document.querySelector("#menu").classList.remove("md:px-4", "md:py-2");
        document.querySelector("#menu").style.width = "100%";
      } else {
        document.querySelector("#menu").classList.add("md:px-4", "md:py-2");
        document.querySelector("#menu").style.width = "auto";
      }
    }

    if ($profilePreviewStore.usernameDOM) {
      $profilePreviewStore.openProfilePreview(true);
    }
  };

  onMount(() => {
    handleResize();
  });

  beforeNavigate(() => {
    isPageLoading = true;
    $profileMenuStore.isMenuOpen = false;
    $profileMenuStore.closeMenu();
  });

  beforeNavigate(({ to }) => {
    if (to.route.id) {
      isPageLoading = true;
    }
  });

  afterNavigate(() => (isPageLoading = false));

  export let data;
</script>

<NavLoginForm />
<div class="flex min-h-screen flex-col justify-start">
  <NavBar />
  {#key data.pathname}
    {#if isPageLoading}<Loader />{/if}
    <div
      in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
      out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
  <Footer />
</div>

<svelte:window
  on:resize={() => {
    handleResize();
  }}
/>
