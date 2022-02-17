<script>
  export let value = "";
  let inputText = value;

  $: {
    console.log("trigger text-with-object update");
    inputText = value.s;
  }

  function applyUpdate() {
    value.s = inputText;
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
