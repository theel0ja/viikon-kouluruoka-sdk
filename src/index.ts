/**
 * ArrayConstructor with .from()
 * https://stackoverflow.com/a/36719911/6451184
 */
interface ArrayConstructor {
  from(arrayLike: any, mapFn?: any, thisArg?: any): Array<any>;
}

/**
 * Collection of `a.kouluruoka-test1`
 */
const test1Elements = document.getElementsByClassName("kouluruoka-test1");

Array.from(test1Elements).forEach(element => {
  element.innerHTML = "foo";
});