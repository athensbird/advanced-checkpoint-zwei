import "whatwg-fetch";
export const WORD_LOADED = "WORD_LOADED";
export const USER_LOADED = "USER_LOADED";
export const ADDED_TO_FAVORITES = "ADDED_TO_FAVORITES";
export const WORD_LIST_LOADED = "WORD_LIST_LOADED";
export const CLEAR_WORD = "CLEAR_WORD";
export const WORD_ALREADY_ADDED = "WORD_ALREADY_ADDED";
// eslint-disable-next-line
import ApiPaths from "../config/config";

export function userLoaded(currentUser) {
  console.log("User loaded!");
  return {
    type: USER_LOADED,
    currentUser
  };
}

export function loadUser() {
  console.log("Started to load users!");
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/user")
    // eslint-disable-next-line
    .then((res, next) => {
      return res.json();
    }).then(res => {
      dispatch(userLoaded(res));
    }).catch(err => {
      console.log(err);
    });
  };
}

export function loadWordList() {
  console.log("Started to load word list!");
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/api")
    // eslint-disable-next-line
    .then((res, next) => {
      return res.json();
    }).then(res => {
      dispatch(wordListLoaded(res));
      console.log("wordlist loaded!");
      return;
    }).catch(err => {
      console.log(err);
    });
  };
}

export function updateUser(payload) {
  console.log("updateUser", payload);
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/user", {
      method: "PUT",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"},
      mode: "cors",
      body: JSON.stringify(payload)
    }).then(() => {
      dispatch(loadUser());
    });
  };
}

export function updateWord(word) {
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/favorites/" + word._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"},
      mode: "cors",
      body: JSON.stringify(word)
    }).then(() => {
      dispatch(loadWordList());
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

export function lookUp(word) {
  // eslint-disable-next-line
  return function (dispatch) {
    if (!word ) {return false;}
    // fetch node server at port 3001
    fetch(ApiPaths.API_URL + "/api/" + word, {
      method: "GET",
    }).then(res => {
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

/*
Step 1: Route a GET request to /api
Step 2: Use Word.findOne(array.word) to check if there is an existing user
Step 3: If there is an existing user, return res.status(422).json(err: "err msg")
Step 4: Build an error handling middleware
*/

export function createUser(state) {
  const user = {
    username: state.username,
    level: 1,
    gamesPlayed: 0
  }
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/user", {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        // eslint-disable-next-line
        "Accept": "application/json "
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(user)
    }).then(res => {
      if (res.status === 422) {
        console.log("User existed!");
      }
      dispatch(loadUser());
      return res.json();
    }).catch(err => {
      console.log(err);
    })
  }
}


export function addToFavorites(array) {
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/api", {
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
      if (res.status === 422) {
        console.log("Word alreay in use!");
        dispatch(addToFavoritesError(res.err));
      }
      dispatch(loadWordList());
      return res.json();
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function addToFavoritesError(err) {
  return {
    type: WORD_ALREADY_ADDED,
    err
  };
}

export function clearWord() {
  return {
    type: CLEAR_WORD
  };
}

export function practice(item) {
  console.log("practice passed", item);
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/favorites/" + item._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"},
      body: JSON.stringify(item)
    }).then(() => {
      dispatch(loadWordList());
    }).catch(err => {
      console.log(err);
    });
  };
}

export function deleteWord(item) {
  return function (dispatch) {
    fetch(ApiPaths.API_URL + "/favorites/" + item._id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(loadWordList());
    });
  };
}
