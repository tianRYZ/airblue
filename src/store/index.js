import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home'
import entrieReducer from './modules/entrie'
import DetailReducer from './modules/detail'
import mainReducer from './modules/main'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//   key: 'root',
//   storage
// }

// const homeReducer = persistReducer(persistConfig, homeReducers);
// const entrieReducer = persistReducer(persistConfig, entrieReducers);
// const DetailReducer = persistReducer(persistConfig, DetailReducers);
// const mainReducer = persistReducer(persistConfig, mainReducers);
const store = configureStore({
  reducer: {
    home: homeReducer,
    entrie: entrieReducer,
    detail: DetailReducer,
    mainInfo: mainReducer
  }
})

// let persistor = persistStore(store)

// export { store, persistor };
export default store
