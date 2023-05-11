<script>
  import Pagination from "../UI/Pagination.svelte";
  import NavBreadcrumb from "./NavBreadcrumb.svelte";

  import { page } from "$app/stores";

  $: pageDirectory = $page.url.pathname.split("/")[1];
</script>

<div
  class="flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center md:fixed md:top-12 w-full px-6 py-1.5 bg-zinc-600"
>
  <div class="flex-1 flex justify-between gap-2 md:justify-normal">
    <div
      class="inline-block sm:w-auto px-2 py-0.5 bg-neutral-800 md:bg-zinc-800 rounded-md text-center sm:text-left align-middle"
    >
      <NavBreadcrumb />
    </div>
    {#if ["section", "inbox"].includes(pageDirectory)}
      <a
        class="flex justify-center items-center bg-gray-200 hover:bg-gray-400 transition-colors duration-500 px-3 py-0.5 rounded-sm cursor-pointer"
        href="/new-topic"
        >New {#if pageDirectory === "section"}Topic{:else if pageDirectory === "inbox"}Message{/if}</a
      >
    {/if}
  </div>
  {#if ["section", "topic", "inbox"].includes(pageDirectory)}
    <Pagination />
  {/if}
</div>
