<script>
  import TextField from "./text-field.svelte";
  import TextFieldWithString from "./text-field-with-string.svelte";
  import TextFieldWithUpdateFunction from "./text-field-with-update-function.svelte";

  let valueAsString = "";
  let valueAsObjectButBindString = { s: "" };

  let valueAsObject = { s: "" };
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
    <TextFieldWithString bind:value={valueAsObjectButBindString.s} />
    {valueAsObjectButBindString.s}
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

  <h3>This works (bind object, use update-function in computed)</h3>
  <div>
    <TextFieldWithUpdateFunction bind:value={valueAsObjectButBind} />
    {valueAsObjectButBind.s}
  </div>
</div>

<style>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
