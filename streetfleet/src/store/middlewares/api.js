export default store => next => action => {
  if (!action.url) return next(action);
  fetch(action.url)
    .then(res => res.json())
    .then(cars => {
      next({
        ...action,
        type: action.type + '_SUCCESS',
        cars,
      });
    })
    .catch(err => {
      console.log(err);
      return next({
        ...action,
        type: action.type + '_FAILURE',
      })
    });
  next({
    ...action,
    type: action.type + '_REQUEST',
  })
}
