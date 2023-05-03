<script>
  import ProfilePreview from "../Profile/ProfilePreview.svelte";
  import { UIStore } from "../../lib/stores/UIStore";
  import { profilePreviewStore } from "../../lib/stores/ProfilePreviewStore";

  const openMiniProfile = (event) => {
    if (!$UIStore.isSmallScreen) {
      event.preventDefault();
      if ($profilePreviewStore.usernameDOM === usernameDOM) {
        $profilePreviewStore.isPreviewFromLeft = null;
        $profilePreviewStore.xPosition = 0;
        $profilePreviewStore.usernameDOM = "";
      } else {
        $profilePreviewStore.isPreviewFromLeft = false;
        $profilePreviewStore.xPosition =
          usernameDOM.getBoundingClientRect().right - event.clientX;
        $profilePreviewStore.usernameDOM = usernameDOM;
      }
    }
  };

  export let forumID;
  export let sectionID;
  export let usernameDOM;
  export let sectionName;
  export let topicTitle;
  export let lastActivityDate;
  export let lastActivityUsername;
</script>

<div class="flex flex-wrap justify-between px-2 py-1 bg-slate-800">
  <h1 class="text-slate-300 hover:text-white text-xl cursor-pointer">
    <a href="/section/test-section">{sectionName}</a>
  </h1>
  <div>
    <a
      class="text-zinc-400 hover:text-slate-300 cursor-pointer"
      href="/topic/test-topic"
      >{topicTitle}

      <span
        class="text-indigo-500 hover:text-indigo-400 text-sm cursor-pointer"
      >
        {lastActivityDate},{" "}
      </span>
    </a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a class="inline-block" href="/profile/abc" on:click={openMiniProfile}>
      <span
        class="text-cyan-600 hover:text-cyan-500 cursor-pointer"
        bind:this={usernameDOM}
      >
        {lastActivityUsername}
      </span>
    </a>
  </div>
  {#if !$UIStore.isSmallScreen && $profilePreviewStore.usernameDOM === usernameDOM}<ProfilePreview
    />{/if}
</div>
