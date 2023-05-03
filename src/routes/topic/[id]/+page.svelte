<script>
  import MessageCard from "../../../components/Message/MessageCard.svelte";
  import MessageForm from "../../../components/Message/MessageForm.svelte";
  import TopicHeader from "../../../components/Topic/TopicHeader.svelte";
</script>

<svelte:head>
  <title>Topic</title>
</svelte:head>

<TopicHeader title="Title" />
<MessageCard
  author="Egehan"
  profilePhoto="https://avatars.githubusercontent.com/u/39706568?v=4"
  isOnline={true}
  rank="Developer"
  creationDate="01/01/2023 00:00"
  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut pharetra erat, a cursus dolor. Quisque at sapien quam. Aenean a urna condimentum metus dignissim rhoncus efficitur at turpis. Sed sit amet vulputate mauris, a euismod massa. Sed at sapien vitae ante pretium bibendum a ut metus. Quisque nec ex id lectus vestibulum dignissim a eu arcu. Sed facilisis sagittis mi consequat pharetra. Ut non purus dui."
/>
<MessageForm />
