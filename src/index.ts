import "core-js/es6/array"; // IE support (https://stackoverflow.com/a/41907111/6451184)

/**
 * Collection of `a.kouluruoka-test1`
 */
const test1Elements = document.getElementsByClassName("kouluruoka-test1");

// FIXME: Try to remove this `Array as any`
(Array as any).from(test1Elements).forEach((element: Element) => {
  element.innerHTML = "foo";
});
