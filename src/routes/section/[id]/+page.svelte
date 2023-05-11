<script>
  import TopicDetail from "../../../components/Topic/TopicDetail.svelte";

  import { UIStore } from "../../../lib/stores/UIStore";
  export let data;
  const sectionName = data.pathname.split("/")[2];
  $UIStore.breadcrumbList = [
    { name: sectionName, path: `/section/${sectionName}` },
  ];
</script>

<svelte:head>
  <title>Section</title>
</svelte:head>

<div class="mb-1" />

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
/>

<TopicDetail
  topicTitle="Title"
  creationAuthor="Egehan"
  creationDate="01/01/2023 00:00"
  lastActivityDate="01/01/2023 00:01"
  lastActivityUsername="Egehan2"
  commentCount={2}
/>
