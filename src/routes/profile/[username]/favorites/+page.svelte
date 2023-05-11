<script>
  import { UIStore } from "../../../../lib/stores/UIStore.js";
  export let data;
  const username = data.pathname.split("/")[2];
  $UIStore.breadcrumbList = [
    {
      name: `${$UIStore.capitalizeText(username)}'s Profile`,
      path: `/profile/${username}`,
    },
    { name: "Favorites", path: `/profile/${username}/favorites` },
  ];
</script>
