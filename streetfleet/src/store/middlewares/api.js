export default (baseUrl) => {
  return store => next => action => {

    if (!action.url) return next(action);
    fetch(baseUrl + action.url, {
      method: action.method,
      headers: action.headers,
      body: JSON.stringify(action.body),
    })
      .then(response => (response.json()))
      .then(response => {
        next({
          ...action,
          type: action.type + '_SUCCESS',
          response,
        });
      })
      .catch(err => {
        console.log('ERROR: ',err);
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
}
