import "core-js/es6/array"; // IE support (https://stackoverflow.com/a/41907111/6451184)

/**
 * Collection of `a.kouluruoka-test1`
 */
const test1Elements = document.getElementsByClassName("kouluruoka-test1");

Array.from(test1Elements).forEach((element) => {
  element.innerHTML = "foo";
});
