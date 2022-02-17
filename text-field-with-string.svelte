<script>
  export let value = "";
  let inputText = value;

  $: {
    // console.log("update input", value);
    console.log("trigger text-with-string update");
    inputText = value;
  }

  function applyUpdate() {
    value = inputText;
  }
</script>

<textarea
  maxlength={100}
  on:keydown|stopPropagation
  on:wheel|stopPropagation
  on:blur={applyUpdate}
  class="text-input acknowledge"
  placeholder="No Description"
  bind:value={inputText}
/>
