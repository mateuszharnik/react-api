export const GETDATA = 'GETDATA';
export const GETNEXTPAGE = 'GETNEXTPAGE';

const URL = 'https://swapi.co/api';

// Wiem, że powinienem przekazywać pobrane dane do reducer'a i tam je zapisać,
// ale chciałem, aby widoki(komponenty) Item i List posiadały własny state
// oraz chciałem nauczyć się jak można zwracać coś z poniższych funkcji :D

export const getData = data => async (dispatch) => {
  dispatch({
    type: GETDATA,
  });

  const resp = await fetch(`${URL + data}`);
  return resp.json();
};

export const getNextPage = data => async (dispatch) => {
  dispatch({
    type: GETNEXTPAGE,
  });

  const resp = await fetch(`${data}`);
  return resp.json();
};
