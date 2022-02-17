<script>
  export let value;
  let inputText = value.s;

  $: {
    // PROBLEM: this is updated on every keytroke,
    // regardles wheather value or value.s actually has changed or hasn't
    console.log("trigger text-with-object-and-bind update");
    update(value);
  }

  function update(d) {
    inputText = d.s;
    value = value;
  }

  function applyUpdate() {
    value.s = inputText;
  }
</script>

<textarea
  maxlength={100}
  on:blur={applyUpdate}
  class="text-input acknowledge"
  placeholder="No Description"
  bind:value={inputText}
/>
