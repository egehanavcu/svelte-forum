<script>
  import { profileMenuStore } from "../../lib/stores/ProfileMenuStore";
  import { UIStore } from "../../lib/stores/UIStore";
  import BookmarksIcon from "../Icons/BookmarksIcon.svelte";
  import CommentIcon from "../Icons/CommentIcon.svelte";
  import InboxIcon from "../Icons/InboxIcon.svelte";
  import LogoutIcon from "../Icons/LogoutIcon.svelte";
  import PersonIcon from "../Icons/PersonIcon.svelte";
  import SettingsIcon from "../Icons/SettingsIcon.svelte";

  const profileMenuClose = (event) => {
    if (
      $UIStore.isSmallScreen &&
      event.clientX < ($UIStore.getWidth() * 3) / 10
    ) {
      $profileMenuStore.isMenuOpen = false;
      $profileMenuStore.closeMenu();
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="menu"
  class="z-30 flex flex-col flex-1 fixed right-0 md:top-12 md:right-24 justify-center items-center md:flex-none md:items-stretch pt-4 md:pt-0 text-slate-300 text-xl md:text-base text-center md:text-left w-0 h-full md:h-auto bg-gradient-to-r from-zinc-700/25 from-0% to-black/[.93] to-30% bg-black/50 md:bg-zinc-800 md:to-zinc-800 md:rounded-b-sm md:shadow-2xl transition-all duration-700 delay-0 md:transition-none overflow-hidden select-none"
  on:click={profileMenuClose}
>
  <ul
    class="space-y-2 md:space-y-0 whitespace-nowrap md:mt-2 translate-x-[30%] md:translate-x-0"
  >
    <img
      src="https://i.pinimg.com/280x280_RS/dc/bc/a6/dcbca671536e67f84dccecd3fce252be.jpg"
      class="mx-auto md:hidden w-24 rounded-full border-2 border-neutral-400 hover:border-white"
      alt="profile"
    />
    <h1 class="md:hidden pb-2 text-cyan-600 text-2xl font-medium">Egehan</h1>
    <li class="hover:text-white">
      <PersonIcon className="inline-block mr-0.5 w-6 fill-white" />
      My profile
    </li>
    <li class="hover:text-white">
      <SettingsIcon className="inline-block mr-0.5 w-6 fill-white" />
      My account
    </li>
    <li class="hover:text-white">
      <InboxIcon className="inline-block mr-0.5 w-6 fill-white" />
      Inbox
    </li>
    <li class="hover:text-white">
      <CommentIcon className="inline-block mr-0.5 w-6 fill-white" />
      Last posts
    </li>
    <li class="hover:text-white">
      <BookmarksIcon className="inline-block mr-0.5 w-6 fill-white" />
      Favorite topics
    </li>
    <li class="h-4" />
    <li class="hover:text-white">
      <LogoutIcon className="inline-block mr-0.5 w-6 fill-white" />
      Logout
    </li>
  </ul>
</div>
