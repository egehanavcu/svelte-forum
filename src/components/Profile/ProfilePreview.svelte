<script>
  import { onMount } from "svelte";
  import { profilePreviewStore } from "../../lib/stores/ProfilePreviewStore";

  let profileCardDOM;
  let arrowDOM;

  onMount(() => {
    $profilePreviewStore.profileCardDOM = profileCardDOM;
    $profilePreviewStore.arrowDOM = arrowDOM;
    $profilePreviewStore.openProfilePreview(isPreviewFromLeft);
  });

  export let isPreviewFromLeft;
</script>

<div
  class="flex flex-wrap gap-4 items-center w-max absolute p-4 bg-slate-900 shadow-2xl border-2 border-b-0 border-gray-600 rounded-sm rounded-b-none"
  bind:this={profileCardDOM}
>
  <img
    src="https://i.pinimg.com/280x280_RS/dc/bc/a6/dcbca671536e67f84dccecd3fce252be.jpg"
    class="hidden md:block md:w-28 md:h-28 border-2 border-black rounded-full"
    alt="profile"
  />
  <div>
    <h1 class="text-cyan-600 text-2xl font-bold">Egehan</h1>
    <h2>
      <span class="text-slate-300">Joined:</span>{" "}
      <span class="text-zinc-400">23 April 2023</span>
    </h2>
    <div class="flex gap-2 justify-between text-slate-300">
      <div class="-space-y-1">
        <h3>Topics</h3>
        <span class="block text-center text-xl font-bold text-zinc-400">
          3
        </span>
      </div>
      <div class="-space-y-1">
        <h3>Messages</h3>
        <span class="block text-center text-xl font-bold text-zinc-400">
          4
        </span>
      </div>
      <div class="-space-y-1">
        <h3>Likes</h3>
        <span class="block text-center text-xl font-bold text-zinc-400">
          5
        </span>
      </div>
    </div>
  </div>
  <div
    class="block absolute -top-2 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-600 border-t-0"
    bind:this={arrowDOM}
  />
  <div
    class="text-center absolute left-0 bottom-0 translate-y-full w-full py-1 bg-slate-950 ring-2 ring-gray-600"
  >
    <a href="/profile/abc" class="text-blue-500 hover:text-blue-400 font-bold"
      >View full profile</a
    >
  </div>
</div>
