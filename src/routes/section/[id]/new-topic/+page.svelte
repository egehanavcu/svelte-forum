<script>
  import TopicForm from "../../../../components/Topic/TopicForm.svelte";

  import { UIStore } from "../../../../lib/stores/UIStore";
  export let data;
  const section = data.pathname.split("/")[2];
  $UIStore.breadcrumbList = [
    { name: section, path: `/section/${section}` },
    { name: "New Topic", path: `/section/${section}/new-topic` },
  ];
</script>

<svelte:head>
  <title>New Topic</title>
</svelte:head>

<TopicForm />
