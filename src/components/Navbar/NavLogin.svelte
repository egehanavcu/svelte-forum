<script>
  import { UIStore } from "../../lib/stores/UIStore";
</script>

<button
  class="inline-block min-w-[4.5rem] bg-gray-200 hover:bg-gray-400 transition-colors duration-1000 px-3 py-1 align-middle rounded-sm cursor-pointer"
  on:click={() => {
    $UIStore.isLoginOpen = true;
  }}>Login</button
>
