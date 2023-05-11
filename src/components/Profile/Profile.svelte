<script>
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";

  export let username;
  export let backgroundPhoto;
  export let profilePhoto;
  export let isOnline;
  export let rank;
  export let creationDate;
  export let about;
</script>

<div class="flex flex-col">
  <div class="relative">
    <img
      src={backgroundPhoto}
      class="w-full h-36 md:h-44 md:-my-1 top-0 left-0 object-cover"
      alt="capybara"
    />
    <div
      class="absolute top-0 w-full h-36 md:h-44 md:-my-1 bg-gradient-to-b from-transparent to-black"
    />
  </div>
  <div class="md:flex md:gap-8 self-center">
    <img
      src={profilePhoto}
      class={`mx-auto -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full outline outline-4 outline-offset-8 ${
        isOnline ? "outline-green-500" : "outline-red-500"
      }`}
      alt="profile"
    />
    <div class="mt-8 md:mt-0 -translate-y-1/2 h-full">
      <div class="md:translate-y-4">
        <h1 class="block md:mt-0 text-lime-400 text-4xl font-bold break-all">
          {username}
        </h1>
        <h2 class="text-cyan-600 text-xl font-semibold italic break-all">
          {rank}
        </h2>
      </div>
      <div class="md:mt-8" />
      <div class="md:bg-zinc-800 md:px-4 md:py-1 md:rounded-b-xl">
        <h2>
          <span class="text-slate-300 text-lg">Joined:</span>{" "}
          <span class="text-zinc-400 text-lg">{creationDate}</span>
        </h2>
        <div class="flex gap-2 text-lg text-slate-300">
          <div class="-space-y-1">
            <h3>Topics</h3>
            <span class="block text-center font-bold text-2xl text-zinc-400">
              3
            </span>
          </div>
          <div class="-space-y-1">
            <h3>Messages</h3>
            <span class="block text-center font-bold text-2xl text-zinc-400">
              4
            </span>
          </div>
          <div class="-space-y-1">
            <h3>Likes</h3>
            <span class="block text-center font-bold text-2xl text-zinc-400">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<TabGroup
  class="relative flex flex-col items-start md:items-start md:flex-row gap-2 md:gap-6 w-11/12 md:w-9/12 mt-3 mx-auto px-3 pt-1 pb-3 bg-zinc-700 rounded-b-md border-b-2 border-b-zinc-800"
>
  <TabList class="w-full flex -translate-y-full absolute top-0 left-0">
    <Tab
      class={({ selected }) => {
        return `flex flex-1 justify-center items-center px-2 py-1 bg-zinc-500 transition-colors duration-300 text-slate-300 font-semibold border-r-2 border-zinc-400/30 rounded-tl-md cursor-pointer select-none ${
          selected
            ? "bg-zinc-800 text-white"
            : "hover:bg-zinc-700 hover:text-white/80"
        }`;
      }}>About</Tab
    >
    <Tab
      class={({ selected }) => {
        return `flex flex-1 justify-center items-center px-2 py-1 bg-zinc-500 transition-colors duration-300 text-slate-300 font-semibold border-r-2 border-zinc-400/30 cursor-pointer select-none ${
          selected
            ? "bg-zinc-800 text-white"
            : "hover:bg-zinc-700 hover:text-white/80"
        }`;
      }}>Last Messages</Tab
    >
    <Tab
      class={({ selected }) => {
        return `flex flex-1 justify-center items-center px-2 py-1 bg-zinc-500 transition-colors duration-300 text-slate-300 font-semibold rounded-tr-md cursor-pointer select-none ${
          selected
            ? "bg-zinc-800 text-white"
            : "hover:bg-zinc-700 hover:text-white/80"
        }`;
      }}>Created Topics</Tab
    >
  </TabList>
  <TabPanels>
    <TabPanel class="md:mt-1 text-slate-300 break-words">{about}</TabPanel>
    <TabPanel class="md:mt-1 text-slate-300 break-words"
      >Last messages...</TabPanel
    >
    <TabPanel class="md:mt-1 text-slate-300 break-words"
      >Created topics...</TabPanel
    >
  </TabPanels>
</TabGroup>
