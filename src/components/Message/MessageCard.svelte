<script>
  import FiberManualRecordIcon from "../Icons/FiberManualRecordIcon.svelte";

  export let author;
  export let profilePhoto;
  export let isOnline;
  export let rank;
  export let creationDate;
  export let message;
</script>

<div
  class="relative flex flex-col items-start md:items-start md:flex-row gap-2 md:gap-6 w-11/12 md:w-9/12 mt-3 mx-auto px-3 pt-1 pb-3 bg-slate-800 rounded-md border-t-2 border-t-slate-700 border-b-2 border-b-slate-900"
>
  <div class="md:w-32">
    <div
      class="flex items-center md:items-stretch gap-3 mt-7 md:mt-2 md:flex-col"
    >
      <img
        src={profilePhoto}
        class="w-16 h-16 mx-auto md:w-28 md:h-auto border-2 border-black"
        alt="profile"
      />
      <div>
        <h1 class="block md:mt-0 text-lime-400 text-lg font-bold break-all">
          <FiberManualRecordIcon
            className={`inline-block w-4 ${
              isOnline ? "fill-green-500" : "fill-red-500"
            }`}
          />
          {author}
        </h1>
        <h2 class="text-cyan-600 font-semibold italic break-all">{rank}</h2>
      </div>
    </div>
    <h3
      class="absolute top-2 left-4 md:static md:top-0 md:right-0 text-indigo-500 text-center md:text-left text-xs"
    >
      {creationDate}
    </h3>
  </div>
  <div class="w-full md:flex md:justify-between">
    <h1
      class="absolute top-1.5 right-4 md:static md:top-0 md:left-0 text-cyan-600 hover:text-cyan-500 text-center md:order-2"
    >
      #1
    </h1>
    <p class="md:mt-1 text-slate-300 break-words">{message}</p>
  </div>
</div>
