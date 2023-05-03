<script>
  import BBCodeIcon from "./BBCodeIcon.svelte";
  import FormatBoldIcon from "../../Icons/FormatBoldIcon.svelte";
  import FormatItalicIcon from "../../Icons/FormatItalicIcon.svelte";
  import FormatUnderlinedIcon from "../../Icons/FormatUnderlinedIcon.svelte";
  import FormatStrikethroughIcon from "../../Icons/FormatStrikethroughIcon.svelte";
  import FormatColorTextIcon from "../../Icons/FormatColorTextIcon.svelte";
  import FormatSizeIcon from "../../Icons/FormatSizeIcon.svelte";
  import FormatAlignLeftIcon from "../../Icons/FormatAlignLeftIcon.svelte";
  import HorizontalRuleIcon from "../../Icons/HorizontalRuleIcon.svelte";
  import TabGroupIcon from "../../Icons/TabGroupIcon.svelte";
  import TableIcon from "../../Icons/TableIcon.svelte";
  import ImageIcon from "../../Icons/ImageIcon.svelte";
  import MovieIcon from "../../Icons/MovieIcon.svelte";
  import AddLinkIcon from "../../Icons/AddLinkIcon.svelte";
  import ListIcon from "../../Icons/ListIcon.svelte";
  import FormatQuoteIcon from "../../Icons/FormatQuoteIcon.svelte";
  import VisibilityLockIcon from "../../Icons/VisibilityLockIcon.svelte";
</script>

<div>
  <div class="flex flex-wrap gap-1.5">
    <div>
      <BBCodeIcon><FormatBoldIcon /></BBCodeIcon>
      <BBCodeIcon><FormatItalicIcon /></BBCodeIcon>
      <BBCodeIcon><FormatUnderlinedIcon /></BBCodeIcon>
      <BBCodeIcon><FormatStrikethroughIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><FormatColorTextIcon className="fill-rose-600" /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><FormatSizeIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><FormatAlignLeftIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><HorizontalRuleIcon /></BBCodeIcon>
      <BBCodeIcon><TabGroupIcon /></BBCodeIcon>
      <BBCodeIcon><TableIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><ImageIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><MovieIcon /></BBCodeIcon>
    </div>
    <div>
      <BBCodeIcon><AddLinkIcon /></BBCodeIcon>
      <BBCodeIcon><ListIcon /></BBCodeIcon>
      <BBCodeIcon><FormatQuoteIcon /></BBCodeIcon>
      <BBCodeIcon><VisibilityLockIcon /></BBCodeIcon>
    </div>
    <div>
      <button
        class="bg-cyan-600 hover:bg-cyan-700 transition-colors duration-1000 px-3 py-1.5 font-bold text-cyan-200 hover:text-white text-xs cursor-pointer"
      >
        Preview
      </button>
    </div>
  </div>
</div>
