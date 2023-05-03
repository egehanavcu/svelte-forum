<div
  class={`animation h-0.5 absolute top-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-50 animate-pulse transition-all duration-1000`}
/>

<style>
  .animation {
    animation: toFullWidth 0.6s forwards;
  }

  @keyframes toFullWidth {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
</style>
