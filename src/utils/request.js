export const request = (url, options) => {
  fetch(url, options)
    .then(
      response => (response.ok) ? response.json(): Promise.reject(response.text())
    )
    .then(
      json => ({ json }),
      error => ({ error }),
    )
    .catch(error => ({ error }));
};