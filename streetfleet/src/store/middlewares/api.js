export default (baseUrl) => {
  return store => next => action => {

    if (!action.url) return next(action);

    fetch(baseUrl + action.url, {
      method: action.method,
      headers: action.headers,
      body: JSON.stringify(action.body),
    })
      .then(response => {
        if (response.status !== 204) return response.json();
        else return response;
      })
      .then(response => {
        next({
          ...action,
          type: action.type + '_SUCCESS',
          response,
        });
      })
      .catch(err => {
        console.log('ERROR: ', err);
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
