<script>
  import ProfileMenu from "../Profile/ProfileMenu.svelte";
  import NavDetail from "./NavDetail.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLogin from "./NavLogin.svelte";
  import NavUser from "./NavUser.svelte";
</script>

<header
  class="flex justify-between items-center z-40 md:fixed w-full px-6 h-12 bg-zinc-900"
>
  <div class="space-x-8">
    <h1
      class="inline-block text-xl text-neutral-400 hover:text-stone-50 align-middle select-none cursor-pointer"
    >
      <a href="/">Svelte Forum</a>
    </h1>
    <ul class="hidden md:inline-block space-x-4 align-middle">
      <NavLink href="/">Forums</NavLink>
    </ul>
  </div>
  <div class="space-x-4">
    <NavUser />
    <NavLogin />
  </div>
</header>
<ProfileMenu />
<NavDetail />
<div class="md:mb-24" />
