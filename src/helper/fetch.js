export default function(url, options) {
  const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const response = response => {
    return response.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (err) {
        return text;
      }
    });
  };

  return fetch(url, options).then(status).then(response);
}
