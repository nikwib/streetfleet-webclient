export default (baseUrl) => {
  return store => next => action => {
    if (!action.url) return next(action);
    //let status = undefined;
    fetch(baseUrl + action.url, {
      method: action.method,
      headers: action.headers,
      body: JSON.stringify(action.body),
    })
      .then(response => {
        // console.log(response);
        this.status = response.status;
        switch (this.status) {
          case 204:
            return response;
          default:
            return response.json();
        }
      })
      .then(response => {
        // console.log('After json', response);
        switch (this.status) {
          case 401:
          case 404:
            next({
              type: action.type + '_FAILURE',
              response,
            });
            break;
          default:
            next({
              ...action,
              type: action.type + '_SUCCESS',
              response,
            });
            break;
        }
      })
      .catch(err => {
        // console.log('ERROR: ', err);
        return next({
          ...action,
          type: action.type + '_FAILURE',
          error: err
        });
      });
    next({
      ...action,
      type: action.type + '_REQUEST',
    });
  };
};
