import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state'; // Adjust the import to your actual AppState interface

export function sessionStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const nextState = reducer(state, action);
    sessionStorage.setItem('appState', JSON.stringify(nextState)); // Persist the entire app state to session storage
    return nextState;
  };
}

export function rehydrateState(): AppState {
  const savedState = sessionStorage.getItem('appState');
  return savedState ? JSON.parse(savedState) : undefined;
}
