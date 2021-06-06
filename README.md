# hangar-native

Hangar Mobile App - An AIO app for a collection of frequently used utilities

For running tests

`npm test`

The project is configured to use `eslint` to enable uniform coding standards. The following command can be used for linting and formatting related operations

```shell
# For checking the linting status of the files
npm run code:lint

# For checking code format
npm run code:formatCheck

# For fixing lint errors and code format
npm run code:clean
```

### Non-relative imports

Project uses path aliases (not relative imports) for keeping the import statements clean. For setting up a new folder inside the `src` directory, the path resolution has to be set in the following files

- jsConfig.json
- babel.config.json
