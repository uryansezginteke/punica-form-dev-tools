let editor = null;
let $viewerContentTitle = null;

/**
 *
 * @param {*} data
 */
const showJson = (data) => {
  if (!editor) {
    editor = new JsonEditor("#json-display");
  }

  editor.load(data);
};

/**
 *
 * @param {*} text
 */
const updateContentTitle = (text) => {
  $viewerContentTitle.text(text);
};

$(document).ready(function () {
  $viewerContentTitle = $(".viewer-content-title");
});
