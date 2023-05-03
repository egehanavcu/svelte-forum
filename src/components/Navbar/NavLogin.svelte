<script>
  const handleLoginClick = () => {
    document.querySelector("#backdrop").style.visibility = "visible";
    document.querySelector("#backdrop").style.opacity = "0.7";

    document.querySelector("#login-form").style.visibility = "visible";
    document.querySelector("#login-form").style.opacity = "1";
  };
</script>

<button
  class="inline-block min-w-[4.5rem] bg-gray-200 hover:bg-gray-400 transition-colors duration-1000 px-3 py-1 align-middle rounded-sm cursor-pointer"
  on:click={handleLoginClick}>Login</button
>
