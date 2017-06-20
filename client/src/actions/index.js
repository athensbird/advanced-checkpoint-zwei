import "whatwg-fetch";
export const PEOPLE_LOADED = "PEOPLE_LOADED";

export function loadPeople() {
  return function (dispatch) {
    fetch("http://localhost:5000/list")
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

export function peopleLoadedError(err) {
  return {
    type: "PEOPLE_LOADED_ERROR",
    err
  };
}

export function createPerson(person) {
  console.log(person);
  return function (dispatch) {
    fetch("http://localhost:5000/list", {
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
    fetch("http://localhost:5000/list/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(loadPeople());
    });
  };
}
