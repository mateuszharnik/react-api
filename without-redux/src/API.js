const URL = 'https://swapi.co/api';

export async function getData(data) {
  const resp = await fetch(`${URL + data}`);
  return resp.json();
}

export async function getNextPage(data) {
  const resp = await fetch(`${data}`);
  return resp.json();
}
