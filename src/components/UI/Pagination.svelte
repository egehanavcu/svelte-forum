<script>
  import ChevronLeftIcon from "../Icons/ChevronLeftIcon.svelte";
  import ChevronRightIcon from "../Icons/ChevronRightIcon.svelte";
  import FirstPageIcon from "../Icons/FirstPageIcon.svelte";
  import LastPageIcon from "../Icons/LastPageIcon.svelte";
</script>

<div class="flex">
  <FirstPageIcon
    className="w-8 transition-colors duration-300 bg-neutral-800 hover:bg-neutral-700 fill-white hover:fill-white/75 first:rounded-l-md last:rounded-r-md"
  />
  <ChevronLeftIcon
    className="w-8 transition-colors duration-300 bg-neutral-800 hover:bg-neutral-700 fill-white hover:fill-white/75 first:rounded-l-md last:rounded-r-md"
  />
  <select
    class="px-2 bg-neutral-800 text-neutral-300 text-lg border-2 border-white/60 align-middle focus:border-white/70 focus:outline-none"
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  <ChevronRightIcon
    className="w-8 transition-colors duration-300 bg-neutral-800 hover:bg-neutral-700 fill-white hover:fill-white/75 first:rounded-l-md last:rounded-r-md"
  />
  <LastPageIcon
    className="w-8 transition-colors duration-300 bg-neutral-800 hover:bg-neutral-700 fill-white hover:fill-white/75 first:rounded-l-md last:rounded-r-md"
  />
</div>
