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
