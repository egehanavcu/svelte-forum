<script>
  import ActionForm from "../UI/ActionForm.svelte";
  import BBCode from "../UI/BBCode/BBCode.svelte";
</script>

<ActionForm formName="Answer">
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
      <div
        class="w-full mt-1 px-3 py-1 bg-slate-800 border-t-2 border-t-slate-700 border-b-2 border-b-slate-900 rounded-md"
      >
        <p class="text-slate-300 break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        </p>
      </div>
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
