import "whatwg-fetch";

export function loadPeople() {
  return function (dispatch) {
    fetch("/list")
    .then((res) => {
      return res.json();
    })
    .then((people) => {
      dispatch(peopleLoaded(people));
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function peopleLoaded(people) {
  return {
    type: "PEOPLE_LOADED",
    value: people
  };
}

export function createPerson(person) {
  return function (dispatch) {
    fetch("/list", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(person)
    }).then(() => {
      dispatch(peopleLoaded());
    });
  };
}

export function deletePerson(id) {
  return function (dispatch) {
    fetch("/list" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(peopleLoaded());
    });
  };
}
