# problem

if you have svelte:self, bind to an object and use computed to update it or trigger render updates, svelte gets stuck in an endless loop or the rendering is blocked.

if you outsource this code to a function, behaviour changes, the rendering continues, but i think it still has kind of a memory leak and does a lot of stuff in the background.

this test provides two versions.
version 1 is the one that blocks everything. version 2 is the one, that uses the function to update. have a look in `comp.svelte` and have a look at the comments in the computed property.

This behavior has started in svelte `v3.0.1`. If you downgrade the the svelte versions in the `package.json` to e.g. `v3.0.0`, it works fine.

# how to start

do following in the root
`npm install`
an then
`npm run dev` or `npm run build`

afterwards open index.html in your browser

## Important files:

- `app.svelte` has a mouse listener and instantiates `comp.svelte`
- `comp.svelte` demonstrates the bug

# expected behavior

Svelte should have a break condition, so that the computed is not updated multiple times.
