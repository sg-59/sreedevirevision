// import {configureStore} from '@reduxjs/toolkit'
// import userslicepage from './Userslice'
// export default configureStore({
//     reducer:{
//         user:userslicepage
//     }
// })

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userslicepage from './Userslice'
import adminslicePage from './Adminslice'


const persistConfig = {
  key: 'ViginReact',
  version: 1,
  storage,
}

const rootReducer=combineReducers({user:userslicepage,admin:adminslicePage})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

