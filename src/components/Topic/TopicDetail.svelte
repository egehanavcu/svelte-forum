<script>
  import { UIStore } from "../../lib/stores/UIStore";
  import { profilePreviewStore } from "../../lib/stores/ProfilePreviewStore";
  import ProfilePreview from "../Profile/ProfilePreview.svelte";
  import LockIcon from "../Icons/LockIcon.svelte";
  import AttachFileIcon from "../Icons/AttachFileIcon.svelte";

  let usernameDOM;
  const openMiniProfile = (event) => {
    if (!$UIStore.isSmallScreen) {
      event.preventDefault();
      if ($profilePreviewStore.usernameDOM === usernameDOM) {
        $profilePreviewStore.isPreviewFromLeft = null;
        $profilePreviewStore.xPosition = 0;
        $profilePreviewStore.usernameDOM = "";
      } else {
        $profilePreviewStore.isPreviewFromLeft = true;
        $profilePreviewStore.xPosition =
          event.clientX - usernameDOM.getBoundingClientRect().left;
        $profilePreviewStore.usernameDOM = usernameDOM;
      }
    }
  };

  export let topicTitle;
  export let creationAuthor;
  export let creationDate;
  export let lastActivityDate;
  export let lastActivityUsername;
  export let commentCount;
</script>

<div
  class="flex justify-between gap-2 w-11/12 md:w-9/12 mt-2 mx-auto px-3 py-1 bg-slate-700 rounded-md border-t-2 border-t-slate-600 border-b-2 border-b-slate-800"
>
  <div class="flex flex-col">
    <div>
      <LockIcon className="inline-block w-6 fill-yellow-600" />
      <AttachFileIcon className="inline-block w-6 fill-zinc-100" />
      <h1
        class="inline-block text-neutral-300 hover:text-white text-xl break-all align-middle"
      >
        <a href="/topic/test-topic">{topicTitle}</a>
      </h1>
    </div>
    <div>
      <span
        class="text-indigo-500 hover:text-indigo-400 text-sm cursor-pointer"
      >
        <a href="/topic/test-topic">{lastActivityDate},</a>{" "}
      </span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a class="inline-block" href="/profile/abc" on:click={openMiniProfile}>
        <span
          class="text-cyan-600 hover:text-cyan-500 cursor-pointer"
          bind:this={usernameDOM}
        >
          {lastActivityUsername}
        </span>
      </a>
      {#if !$UIStore.isSmallScreen && $profilePreviewStore.usernameDOM === usernameDOM}
        <ProfilePreview />
      {/if}
      <div class="md:inline-block md:mr-8" />
      <a
        href="/topic/test-topic"
        class="block md:inline-block text-slate-500 hover:text-slate-400 text-xs cursor-pointer"
      >
        Started by <span
          class="text-cyan-600 hover:text-cyan-500 cursor-pointer"
        >
          {creationAuthor}
        </span>
        on {creationDate}
      </a>
    </div>
  </div>
  <a
    href="/topic/test-topic"
    class="inline-block min-w-max self-center text-green-500 hover:text-green-400 text-2xl break-all align-middle"
    >{commentCount}</a
  >
</div>
