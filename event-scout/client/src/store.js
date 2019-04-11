import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from './reducers/manageReducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxReset from 'redux-reset';

import logger from 'redux-logger'

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


	export let store = createStore(persistedReducer, compose(applyMiddleware(thunk, logger), reduxReset()));
	export let persistor = persistStore(store);
	