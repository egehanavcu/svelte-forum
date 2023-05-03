<script>
  import NavBreadcrumb from "./NavBreadcrumb.svelte";
</script>

<div
  class="flex justify-between items-center z-20 md:fixed md:top-12 w-full px-6 py-1.5 bg-zinc-600"
>
  <div class="space-x-2">
    <div
      class="inline-block sm:w-auto px-2 py-0.5 bg-zinc-800 rounded-md text-center sm:text-left align-middle"
    >
      <NavBreadcrumb />
    </div>
    <a
      class="inline-block bg-gray-200 hover:bg-gray-400 transition-colors duration-500 px-3 py-1 align-middle rounded-sm cursor-pointer"
      href="/new-topic">New Topic</a
    >
  </div>
</div>
