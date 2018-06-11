import "core-js/es6/array"; // IE support (https://stackoverflow.com/a/41907111/6451184)

const settings = {
  defaultHeight: 480, // as pixels
  defaultWidth: 640, // as pixels
};

function createIframe(source: string, width?: number | string, height?: number | string): HTMLIFrameElement {
  const element = document.createElement("iframe");

  // Disable borders and set max width to 100%
  element.frameBorder = "0";
  element.style.maxWidth = "100%";

  // Set src
  element.src = source;

  // Set width and height
  if (width) {
    element.width = width.toString();
  } else {
    element.width = settings.defaultWidth.toString();
  }

  if (height) {
    element.height = height.toString();
  } else {
    element.height = settings.defaultHeight.toString();
  }

  // Return the element
  return element;
}

/**
 * Collection of `a.kouluruoka-menu`
 */
const menuElements = document.querySelectorAll("div[data-src].kouluruoka-menu");

Array.from(menuElements).forEach((element: HTMLDivElement) => {

  // URL in <a> and remove query parameters and fragment
  let sourceUrl = element.dataset.src;
  sourceUrl = sourceUrl.split("#")[0];
  sourceUrl = sourceUrl.split("?")[0];

  // Parse sourceUrl
  let iframeUrl = sourceUrl;
  iframeUrl = iframeUrl + "/embed"; // Add /embed suffix

  // Set width and height (TODO:)

  // tslint:disable-next-line:prefer-const
  let width;
  // tslint:disable-next-line:prefer-const
  let height;

  // Create iframe
  const iframe = createIframe(iframeUrl, width, height);

  // Remove stuff inside the element
  element.innerText = "";

  // Add iframe inside the element
  element.appendChild(iframe);
});
