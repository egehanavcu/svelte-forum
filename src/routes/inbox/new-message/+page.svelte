<script>
  import TopicForm from "../../../components/Topic/TopicForm.svelte";

  import { UIStore } from "../../../lib/stores/UIStore";
  $UIStore.breadcrumbList = [
    { name: "Inbox", path: `/inbox` },
    { name: "New Message", path: `/inbox/new-message` },
  ];
</script>

<svelte:head>
  <title>New Message</title>
</svelte:head>

<TopicForm />
