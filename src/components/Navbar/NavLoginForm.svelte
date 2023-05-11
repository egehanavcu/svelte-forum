<script>
  import {
    Dialog,
    DialogOverlay,
    DialogDescription,
    TransitionChild,
    Transition,
  } from "@rgossiaux/svelte-headlessui";

  import { UIStore } from "../../lib/stores/UIStore";
  import { profileMenuStore } from "../../lib/stores/ProfileMenuStore";

  $: {
    if ($UIStore.isLoginOpen) {
      $profileMenuStore.isMenuOpen = false;
      $profileMenuStore.closeMenu();
    }
  }
</script>

<Transition show={$UIStore.isLoginOpen}>
  <Dialog on:close={() => ($UIStore.isLoginOpen = false)}>
    <DialogOverlay
      class="w-full h-full fixed top-0 right-0 bg-black opacity-70"
    />
    <TransitionChild
      enter="ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <DialogDescription
        class="flex flex-col justify-between items-center space-y-6 w-11/12 md:w-4/5 h-5/6 bg-zinc-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:rounded-sm transition-opacity duration-700 dark-bg md:outline-2 md:outline-white/60 md:-outline-offset-[16px] md:outline-dashed"
        ><div class="flex flex-col justify-center flex-1 mt-12 md:mt-0">
          <img
            src="/logo.png"
            class="block w-24 md:w-36 self-center mb-3"
            alt="profile"
          />
          <h1
            class="text-slate-300 text-2xl md:text-4xl text-center font-extrabold"
          >
            Login to Forum
          </h1>
          <div class="mt-4 px-4 md:px-0">
            <label class="text-slate-300 text-left" for="username"
              >E-mail / Username</label
            >
            <input
              type="text"
              name="username"
              class="w-full h-8 px-2 rounded-sm mt-1"
              placeholder="abc@example.com / User#1234"
              autocomplete="on"
            />

            <label class="block text-slate-300 mt-2" for="password"
              >Password</label
            >
            <input
              type="password"
              name="password"
              class="w-full h-8 px-2 rounded-sm mt-1"
              placeholder="••••••••••••"
            />
            <button
              class="w-full px-2 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-sm mt-4 transition-colors duration-500"
            >
              Login
            </button>
          </div>
        </div>
        <svg
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="visible md:hidden w-full h-min transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,200 0,200 C 65.04306220095694,167.23444976076556 130.08612440191388,134.4688995215311 241,152 C 351.9138755980861,169.5311004784689 508.6985645933013,237.35885167464113 624,238 C 739.3014354066987,238.64114832535887 813.1196172248805,172.0956937799043 882,153 C 950.8803827751195,133.9043062200957 1014.822966507177,162.2583732057416 1107,178 C 1199.177033492823,193.7416267942584 1319.5885167464116,196.8708133971292 1440,200 C 1440,200 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#8ed1fc"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          />
          <path
            d="M 0,600 C 0,600 0,400 0,400 C 87.49282296650716,413.61722488038276 174.98564593301433,427.23444976076553 261,426 C 347.0143540669857,424.76555023923447 431.5502392344499,408.67942583732054 532,404 C 632.4497607655501,399.32057416267946 748.8133971291865,406.0478468899521 850,425 C 951.1866028708135,443.9521531100479 1037.1961722488038,475.12918660287085 1133,473 C 1228.8038277511962,470.87081339712915 1334.401913875598,435.4354066985646 1440,400 C 1440,400 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#8ed1fc"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          />
        </svg></DialogDescription
      >
    </TransitionChild>
  </Dialog>
</Transition>
