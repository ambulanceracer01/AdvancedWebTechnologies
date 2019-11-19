fetch('http://127.0.0.1:3001/', { mode: 'no-cors' })
  .then(function(response) {
    console.log(response);
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('Request failed', error);
  });
