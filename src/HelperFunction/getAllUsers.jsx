export const getUsers = (params) => {
  return fetch(`https://jsonplaceholder.typicode.com/${params}`).then(
    (response) => response.json()
  );
};
