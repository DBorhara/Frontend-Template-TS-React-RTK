// Save state to sessionStorage
function saveToSessionStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  } catch (e) {
    console.warn(e)
  }
}

// Load state from sessionStorage
function loadFromSessionStorage() {
  try {
    const serializedState = sessionStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

// Middleware to save state changes to sessionStorage
const sessionStorageMiddleware =
  (store: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    let result = next(action)
    saveToSessionStorage(store.getState())
    return result
  }

export {
  saveToSessionStorage,
  loadFromSessionStorage,
  sessionStorageMiddleware
}
