<script>
  import TextField from "./text-field.svelte";
  import TextFieldWithString from "./text-field-with-string.svelte";
  let valueAsObject = { s: "" };

  let valueAsString = "";
</script>

<div class="main">
  <h3>This works (bind string)</h3>
  <div>
    {valueAsString}
    <TextFieldWithString bind:value={valueAsString} />
  </div>

  <h3>This does not work (pass object)</h3>
  <div>
    {valueAsObject.s}
    <TextField value={valueAsObject} />
  </div>
</div>

<style>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
