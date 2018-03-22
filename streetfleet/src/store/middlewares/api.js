export default store => next => action => {

  if (!action.url) return next(action);
  fetch(action.url, {
    method: action.method,
    header: action.header,
    body: JSON.stringify(action.body),
  })
    .then(response => (
      response.json()))
    .then(response => {
      next({
        ...action,
        type: action.type + '_SUCCESS',
        response,
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
