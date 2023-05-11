<script>
  import TopicDetail from "../../components/Topic/TopicDetail.svelte";

  import { UIStore } from "../../lib/stores/UIStore";
  $UIStore.breadcrumbList = [{ name: "Inbox", path: "/inbox" }];
</script>

<svelte:head>
  <title>Conversations</title>
</svelte:head>

<div class="mb-1" />

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
  isPrivateMessage={true}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
  isPrivateMessage={true}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
  isPrivateMessage={true}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
  isPrivateMessage={true}
/>
