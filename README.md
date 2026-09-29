# rolldown preserveModules rename repro

`annotations.js` imports `AnnotationQuery` under an alias and declares its own `AnnotationQuery`. With `preserveModules`, rolldown renames the local declaration to `AnnotationQuery$1` when `annotations.js` is not an entry.

## js

This folder has the JS case.

1. `cd js`
2. `npm install`
3. `npm run build`

The build prints `dist/annotations.js`.

## dts

This folder has the same case as `.d.ts` output through rolldown-plugin-dts.

1. `cd dts`
2. `npm install`
3. `npm run build`. The build prints `dist/annotations.d.ts`.
4. `npm run consumer`. TypeScript type-checks `consumer/consumer.ts` and prints an error that shows `AnnotationQuery$1`.

To compare with the entry case, uncomment the second `input` line in `rolldown.config.ts` and run the build again.
