<script>
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
</script>

<TabGroup
  class="w-11/12 md:w-9/12 mt-3 mx-auto px-3 py-1.5 bg-slate-700 rounded-md border-t-2 border-t-slate-600 border-b-2 border-b-slate-800"
>
  <TabList class="text-green-500 border-b-2 border-gray-900 mb-2">
    <Tab
      class={({ selected }) => {
        return `p-2 rounded-t-md ${
          selected
            ? "bg-gray-900 text-sky-600"
            : "hover:text-green-500 hover:bg-gray-800"
        }`;
      }}>My account</Tab
    >
    <Tab
      class={({ selected }) => {
        return `p-2 rounded-t-md ${
          selected
            ? "bg-gray-900 text-sky-600"
            : "hover:text-green-500 hover:bg-gray-800"
        }`;
      }}>Change password</Tab
    >
    <Tab
      class={({ selected }) => {
        return `p-2 rounded-t-md ${
          selected
            ? "bg-gray-900 text-sky-600"
            : "hover:text-green-500 hover:bg-gray-800"
        }`;
      }}>Change email</Tab
    >
  </TabList>
  <TabPanels class="text-slate-300">
    <TabPanel
      ><ul>
        <li>
          Username : <span class="font-bold">Egehan</span>
        </li>
        <li>Email : <span class="font-bold">e*********@g****.com</span></li>
        <li>
          Registration date : <span class="text-indigo-500"
            >04/03/2011 16:20</span
          >
        </li>
      </ul>
    </TabPanel>
    <TabPanel
      >You must validate your account in order to be able to edit account
      settings.</TabPanel
    >
    <TabPanel
      >You must validate your account in order to be able to edit account
      settings.</TabPanel
    >
  </TabPanels>
</TabGroup>
