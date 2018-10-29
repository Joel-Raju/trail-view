const request = (url, options) => 
  fetch(url, options)
    .then(
      response => (response.ok) ? response.json(): Promise.reject(response.text())
    )
    .then(
      response => ({ response }),
      error => ({ error }),
    )
    .catch(error => ({ error }));

export default request;
