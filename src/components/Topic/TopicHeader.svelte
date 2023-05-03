<script>
  import SettingsIcon from "../Icons/SettingsIcon.svelte";

  export let title;
</script>

<div
  class="w-11/12 md:w-9/12 mt-3 mx-auto px-3 py-1 bg-slate-700 rounded-md border-t-2 border-t-slate-600 border-b-2 border-b-slate-800"
>
  <SettingsIcon
    className="inline-block w-8 mr-2 p-0.5 bg-neutral-900 fill-zinc-500 border-2 border-zinc-800 rounded-md"
  />
  <h1 class="inline-block text-neutral-300 text-2xl break-all align-middle">
    {title}
  </h1>
</div>
