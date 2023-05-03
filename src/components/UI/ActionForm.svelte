<script>
  export let formName;
</script>

<div
  class="w-11/12 md:w-9/12 mt-4 mx-auto px-3 pt-1 pb-6 space-y-4 bg-zinc-800 rounded-md border-t-2 border-t-zinc-700 border-b-2 border-b-zinc-900"
>
  <h1 class="text-slate-300 text-xl border-b-2 border-neutral-200">
    {formName}
  </h1>
  <slot />
</div>
