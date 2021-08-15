const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("action received:", action);
  const resultState = next(action);
  console.log("new state: ", store.getState());
  console.groupEnd(action.type);
  return resultState;
};
export default logger;
