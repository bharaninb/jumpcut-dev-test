# Jumpcut Dev Test

## Getting started

- To start dev app
```shell
yarn start:dev
```

- To test dev app
```shell
yarn test
```
- To build app for production
```shell
yarn build
```

## Design Decisions

### Packages
- `@material-ui/core`: Includes predefined components
- `prop-types`: Runtime type checking for React props
- `husky`: To prevents bad commit or push
- `lint-staged`: Lint files staged by git, prevents bad code styling push or commit

### Other decisions

Sequencers, `partialSum` and `range` were not included in ui. Since it requires extra input from users, planned not to include in the scope.

All the sequencer functions are implemented to handle only numbers and other data types not checked. As for the current scope, it is not needed.

State is maintained using `redux` to isolate integration of backend and frontend to actions. All dom events were handled by redux action and updated from redux state.


