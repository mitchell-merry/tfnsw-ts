# tfnsw-ts

This is a WIP project.

For testing, we are still running this as a script via `npm run dev`.

## Dev setup
1. Install Node. (preferably via [nvs](https://github.com/jasongin/nvs) or `nvm` ([posix](https://github.com/nvm-sh/nvm), [windows](https://github.com/coreybutler/nvm-windows))).
   - Use the version stored in `.nvmrc`.
1. Install [pnpm](https://pnpm.io/installation)
1. `pnpm i` to install dependencies
1. Get an API key - follow [this guide](https://opendata.transport.nsw.gov.au/user-guide).
   - Make sure it has access to all the datasets you intend to use.

### Dev loop:
1. Make your change to the code.
1. Build your code `pnpm build`.
1. Run your code `pnpm start`.
   - Build and run in the same step: `pnpm dev`

TODO: unit tests with `pnpm test`

TODO: dev loop for an NPM package, rather than a script as it is now