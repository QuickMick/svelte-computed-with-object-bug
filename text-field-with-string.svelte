<script>
  export let value = "";
  let inputText = value;

  $: {
    // this is just updated when actually the value changes
    console.log("trigger text-with-string update");
    inputText = value;
  }

  function applyUpdate() {
    value = inputText;
  }
</script>

<textarea
  maxlength={100}
  on:blur={applyUpdate}
  class="text-input acknowledge"
  placeholder="No Description"
  bind:value={inputText}
/>
