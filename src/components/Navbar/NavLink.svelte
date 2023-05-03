<script>
  export let href;
</script>

<a {href}>
  <li
    class="flex justify-center items-center px-4 h-12 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-300 cursor-pointer"
    {href}
  >
    <slot />
  </li>
</a>
