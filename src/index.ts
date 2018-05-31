import "core-js/es6/array"; // IE support (https://stackoverflow.com/a/41907111/6451184)

function createIframe(source: string): HTMLIFrameElement {
  const element = document.createElement("iframe");

  // Disable borders
  element.frameBorder = "0";

  element.src = "https://www.example.com"; // source;

  return element;
}

/**
 * Collection of `a.kouluruoka-test1`
 */
const test1Elements = document.querySelectorAll("div[data-src].kouluruoka-test1");

// FIXME: Try to remove this `Array as any`
(Array as any).from(test1Elements).forEach((element: HTMLDivElement) => {

  // URL in <a>
  const sourceUrl = element.dataset.src;

  // Parse sourceUrl
  const iframeUrl = sourceUrl;

  // Create iframe
  const iframe = createIframe(iframeUrl);

  // Remove stuff inside the element
  element.innerText = "";

  // Add iframe inside the element
  element.appendChild(iframe);
});
