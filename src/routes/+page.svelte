<script>
  import ForumToggle from "../components/Forum/ForumToggle.svelte";

  import { UIStore } from "../lib/stores/UIStore";
  $UIStore.breadcrumbList = [];
</script>

<svelte:head>
  <title>Forums</title>
</svelte:head>

<ForumToggle forumID={1} forumName="Test Forum 1" />
<ForumToggle forumID={2} forumName="Test Forum 2" />
