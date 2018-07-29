/* @flow */
/* eslint-disable */

/*
Simply declaring each module to export "any" allows us to ignore the entire
"node_modules" directory within ".flowconfig" (and all the errors they generate)
without getting "Required module not found" flow errors. It is not ideal, but
seems to be the best workaround for ignoring errors unrelated to this project's
code.

https://flow.org/en/docs/libdefs/creation/
https://github.com/facebook/flow/issues/869#issuecomment-256643823
*/
declare var console: any

declare module 'RelativeImageStub' { declare module.exports: any }
declare module 'react-native' { declare module.exports: any }
declare module 'react-navigation' { declare module.exports: any }
declare module 'lodash' { declare module.exports: any }
declare module 'moment' { declare module.exports: any }
declare module 'uuid/v4' { declare module.exports: any }
declare module 'axios' { declare module.exports: any }
declare module 'redux' { declare module.exports: any }
declare module 'redux-saga' { declare module.exports: any }
declare module 'redux-saga/effects' { declare module.exports: any }
declare module 'react-redux' { declare module.exports: any }
declare module 'redux-thunk' { declare module.exports: any }
declare module 'reactotron-react-native' { declare module.exports: any }
declare module 'reactotron-redux' { declare module.exports: any }
declare module 'redux-persist' { declare module.exports: any }
declare module 'redux-persist/lib/stateReconciler/autoMergeLevel1' { declare module.exports: any }
declare module 'redux-persist/lib/storage' { declare module.exports: any }
declare module 'react-native-vector-icons/FontAwesome' { declare module.exports: any }
declare module 'react-native-vector-icons/Octicons' { declare module.exports: any }
declare module 'react-navigation-redux-helpers' { declare module.exports: any }
declare module 'redux-persist/src/constants' { declare module.exports: any }
declare module 'redux-persist/integration/react' { declare module.exports: any }
declare module 'route-parser' { declare module.exports: any }
declare module 'axios-mock-adapter' { declare module.exports: any }
declare module 'lowdb' { declare module.exports: any }
declare module 'react-native-config' { declare module.exports: any }
declare module 'jwt-decode' { declare module.exports: any }
declare module 'prop-types' { declare module.exports: any }
declare module 'react-native-vector-icons/MaterialIcons' { declare module.exports: any }
declare module 'react-native-vector-icons/MaterialCommunityIcons' { declare module.exports: any }
declare module 'react-native-camera' { declare module.exports: any }
declare module 'react-native-appsee' { declare module.exports: any }
declare module 'ajv' { declare module.exports: any }
declare module 'react-native-keyboard-aware-scroll-view' { declare module.exports: any }
declare module 'react-native-keyboard-aware-view' { declare module.exports: any }
declare module 'react-native-device-info' { declare module.exports: any }
declare module 'semver' { declare module.exports: any }
declare module 'lowdb/adapters/FileSync' {declare module.exports: any }
declare module 'rn-fetch-blob' { declare module.exports: any }