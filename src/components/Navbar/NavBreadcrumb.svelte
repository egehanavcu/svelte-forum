<script>
  import { UIStore } from "../../lib/stores/UIStore";

  let breadcrumbList;
  UIStore.subscribe((value) => (breadcrumbList = value.breadcrumbList));
</script>

<div class="py-0.5 text-zinc-400 cursor-pointer">
  <a href="/" class="hover:text-slate-300">Forums</a>
  {#each breadcrumbList as item}
    / <a href={item.path} class="hover:text-slate-300">{item.name}</a>{" "}
  {/each}
</div>
