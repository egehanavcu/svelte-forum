<script>
  import TopicForm from "../../../../components/Topic/TopicForm.svelte";

  import { UIStore } from "../../../../lib/stores/UIStore";
  export let data;
  const sectionName = data.pathname.split("/")[2];
  $UIStore.breadcrumbList = [
    {
      name: $UIStore.slugToTitle(sectionName),
      path: `/section/${sectionName}`,
    },
    { name: "New Topic", path: `/section/${sectionName}/new-topic` },
  ];
</script>

<svelte:head>
  <title>New Topic</title>
</svelte:head>

<TopicForm />
