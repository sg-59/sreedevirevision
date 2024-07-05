// import {configureStore} from '@reduxjs/toolkit'
// import userslicePage from './UserSlice'
// export default configureStore({
//     reducer:{
// userData:userslicePage
//     }
// })

import { configureStore } from '@reduxjs/toolkit'
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
import userslicePage from './UserSlice'


const persistConfig = {
  key: "revisionSreedevi",
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, userslicePage)

export const store = configureStore({
  reducer:{
   userData :persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


