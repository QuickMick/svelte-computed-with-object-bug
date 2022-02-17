<script>
  import TextField from "./text-field.svelte";
  import TextFieldWithString from "./text-field-with-string.svelte";
  let valueAsObject = { s: "" };

  let valueAsString = "";

  let valueAsObjectButBind = { s: "" };
</script>

<div class="main">

  <!-- example that works like i would expect -->
  <h3>This works (bind string)</h3>
  <div>
    <TextFieldWithString bind:value={valueAsString} />
    {valueAsString}
  </div>

  <!-- example that works also like i would expect -->
  <h3>This works as well (bind string of object)</h3>
  <div>
    <TextFieldWithString bind:value={valueAsObjectButBind.s} />
    {valueAsObjectButBind.s}
  </div>

  <!-- example that does basically the same, but does not work as i would expect -->
  <!-- here, an object is passed instead of a string -->
  <h3>This does not work (pass object)</h3>
  <div>
    <!-- usually i woudl do bind:value={valueAsObject} -->
    <!-- and would do `value=value` to update it -->
    <TextField value={valueAsObject} />
    {valueAsObject.s}
  </div>
  
</div>

<style>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
