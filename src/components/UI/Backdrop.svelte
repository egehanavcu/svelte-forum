<script>
  let lastTimeout;

  const handleBackdropClick = (event) => {
    event.target.style.opacity = "0";
    document.querySelector("#login-form").style.opacity = "0";
    lastTimeout = setTimeout(() => {
      clearTimeout(lastTimeout);
      event.target.style.visibility = "hidden";
      document.querySelector("#login-form").style.visibility = "hidden";
    }, 700);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="backdrop"
  class="w-full h-full z-50 fixed top-0 right-0 bg-black transition-opacity duration-500"
  style={"visibility: hidden; opacity: 0"}
  on:click={handleBackdropClick}
/>
