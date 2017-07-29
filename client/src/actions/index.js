import "whatwg-fetch";
export const PEOPLE_LOADED = "PEOPLE_LOADED";
export const WORD_LOADED = "WORD_LOADED";
export const ADDED_TO_FAVORITES = "ADDED_TO_FAVORITES";
export const WORD_LIST_LOADED = "WORD_LIST_LOADED";
export const CLEAR_WORD = "CLEAR_WORD";

export function loadPeople() {
  return function (dispatch) {
    fetch("http://localhost:3001/list")
    // eslint-disable-next-line
    .then((res, next) => {
      console.log(res);
      return res.json();
    })
    .then((people) => {
      console.log(people);
      dispatch(peopleLoaded(people));
      return;
    }).catch((err) => {
      dispatch(peopleLoadedError(err));
    });
  };
}

export function peopleLoaded(people) {
  console.log("People loaded!!");
  return {
    type: PEOPLE_LOADED,
    value: people
  };
}

// export function loadWord() {
//   return function (dispatch) {
//     fetch("http://localhost:5000/api")
//     // eslint-disable-next-line
//     .then((res, next) => {
//       return res.json();
//     })
//     .then(word => {
//       dispatch(wordLoaded(word));
//       return;
//     }).catch(err => {
//       console.log(err);
//     });
//   };
// }

export function loadWordList() {
  return function (dispatch) {
    fetch("http://localhost:3001/api")
    // eslint-disable-next-line
    .then((res, next) => {
      console.log(res);
      return res.json();
    }).then(res => {
      dispatch(wordListLoaded(res));
      return;
    }).catch(err => {
      console.log(err);
    });
  };
}

export function wordLoaded(res) {
  return {
    type: WORD_LOADED,
    definition: res.def
  };
}

export function wordListLoaded(list) {
  return {
    type: WORD_LIST_LOADED,
    list
  };
}

export function peopleLoadedError(err) {
  return {
    type: "PEOPLE_LOADED_ERROR",
    err
  };
}

export function createPerson(person) {
  console.log(person);
  return function (dispatch) {
    fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        // eslint-disable-next-line
        "Accept": "application/json "
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(person)
    }).then((res) => {
      dispatch(loadPeople());
      return res.json();
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function deletePerson(id) {
  return function (dispatch) {
    console.log("Delete ID: ", id);
    fetch("http://localhost:3001/list/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(loadPeople());
    });
  };
}

export function lookUp(word) {
  // eslint-disable-next-line
  return function (dispatch) {
    console.log("Lookup triggered!", word);
    if (!word ) {return false;}
    // fetch node server at port 3001
    fetch("http://localhost:3001/api/" + word, {
      method: "GET",
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(data => {
      dispatch(wordLoaded(data));
    }).catch(err => console.log(err));
  };
}

export function addToFavoritos(array) {
  return {
    type: ADDED_TO_FAVORITES,
    array
  };
}

export function addToFavorites(array) {
  return function (dispatch) {
    fetch("http://localhost:3001/api", {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        // eslint-disable-next-line
        "Accept": "application/json "
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(array)
    }).then((res) => {
      dispatch(loadWordList());
      return res.json();
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function clearWord() {
  return {
    type: CLEAR_WORD
  };
}
