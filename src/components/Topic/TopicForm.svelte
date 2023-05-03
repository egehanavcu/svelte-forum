<script>
  import ActionForm from "../UI/ActionForm.svelte";
  import BBCode from "../UI/BBCode/BBCode.svelte";
</script>

<ActionForm formName="New Topic">
  <div class="w-full md:w-10/12 md:mx-auto md:flex md:gap-4">
    <label class="text-slate-300" for="topicname">Title</label>
    <input
      type="text"
      name="topicname"
      class="w-full md:w-3/5 h-8 px-2 rounded-sm"
      maxlength="256"
      autocomplete="on"
    />
  </div>
  <div class="w-full md:w-10/12 md:mx-auto md:flex md:gap-4">
    <label class="text-slate-300 align-top" for="message">Message</label>
    <div class="flex flex-col w-full">
      <BBCode />
      <textarea
        rows="5"
        name="message"
        class="block w-full md:flex-1 my-2 px-2 py-1 rounded-sm"
        maxlength="60000"
      />
    </div>
  </div>
  <div class="w-full md:w-10/12 md:mx-auto">
    <button
      class="w-full md:w-auto px-2 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-sm"
    >
      Submit
    </button>
  </div>
</ActionForm>
