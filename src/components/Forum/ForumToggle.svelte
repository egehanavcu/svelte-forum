<script>
  import { onMount } from "svelte";

  import { profilePreviewStore } from "../../lib/stores/ProfilePreviewStore";

  import ForumSection from "./ForumSection.svelte";
  import AddIcon from "../Icons/AddIcon.svelte";
  import RemoveIcon from "../Icons/RemoveIcon.svelte";

  let isForumOpen = false;
  let sectionsDOM;

  onMount(() => {
    setTimeout(() => {
      handleToggleClick();
    }, 0);
  });

  const handleToggleClick = () => {
    isForumOpen = !isForumOpen;

    if ($profilePreviewStore.usernameDOM) {
      $profilePreviewStore.usernameDOM = "";
      $profilePreviewStore.profileCardDOM = "";
      $profilePreviewStore.arrowDOM = "";
      $profilePreviewStore.xPosition = 0;
    }

    if (isForumOpen) {
      sectionsDOM.style.gridTemplateRows = "1fr";
    } else {
      sectionsDOM.style.gridTemplateRows = "0fr";
    }
  };

  export let forumID;
  export let forumName;
</script>

<div
  class="w-11/12 md:w-9/12 mt-3 mx-auto px-3 py-1.5 bg-slate-700 rounded-md border-t-2 border-t-slate-600 border-b-2 border-b-slate-800"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex justify-between items-center" on:click={handleToggleClick}>
    <span>
      <h1
        class="inline-block align-middle text-slate-300 hover:text-white text-4xl cursor-pointer select-none"
      >
        {forumName}
      </h1>
    </span>
    <div>
      <div class="icon">
        {#if isForumOpen}
          <RemoveIcon className="w-8 fill-slate-200" />
        {:else}
          <AddIcon className="w-8 fill-slate-200" />
        {/if}
      </div>
    </div>
  </div>
  <div
    class="grid transition-[grid-template-rows] duration-500 mt-2"
    style="grid-template-rows: 0fr;"
    bind:this={sectionsDOM}
  >
    <div class="overflow-hidden">
      <ForumSection
        {forumID}
        sectionID={1}
        sectionName="Test Section 1"
        topicTitle="Topic 1"
        lastActivityDate="01/01/2023 00:00"
        lastActivityUsername="Egehan"
      />
      <ForumSection
        {forumID}
        sectionID={2}
        sectionName="Test Section 2"
        topicTitle="Topic 2"
        lastActivityDate="01/01/2023 00:01"
        lastActivityUsername="Egehan"
      />
      <ForumSection
        {forumID}
        sectionID={3}
        sectionName="Test Section 3"
        topicTitle="Topic 3"
        lastActivityDate="01/01/2023 00:02"
        lastActivityUsername="Egehan"
      />
    </div>
  </div>
</div>

<style>
  .icon {
    width: 2rem;
    color: #e2e8f0;
  }
</style>
