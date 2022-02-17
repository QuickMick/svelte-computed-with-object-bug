# problem

i have noticed, that when you e.g. have a textarea in a component and if you have a `$:{}` which uses an object that is passed to the component, then this is called on every keystroke, even if there is no change on the data

the `$:{}` in `text-field.svelte` should work similar to the one in `text-field-with-update-function.svelte` and should not be triggered, when there is no change.

as you see in the 3rd example the `inputText` is always cleared because of the empty value of value.s. this update should not happen in my opinion, because data nor data.s was changed - so this somehow gets triggered bei the input-event

This behavior has started in svelte `v3.2.1` i think. If you downgrade the the svelte versions in the `package.json` to e.g. `v3.0.0`, it works fine.

# how to start

do following in the root-folder
`npm install`
an then
`npm run dev` or `npm run build`

afterwards open index.html in your browser and try to type in the textareas

# expected behavior

- every textarea should work as the same
- after it looses focus, the value on the right should be updated

## Important files:

- `app.svelte` instantiates all examples
- files starting with `text-field-xxxxx.svelte` are all test-cases
- `text-field.svelte` contains the test-case, that does not work
