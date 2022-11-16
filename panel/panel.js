$(document).ready(function () {
  /**
   *
   */
  const init = () => {
    $(".panel-left").resizable({
      handleSelector: ".splitter",
      resizeHeight: false,
    });

    chrome.runtime.onMessage.addListener(recieveMessage);
  };

  /**
   *
   * @param {*} req
   * @param {*} rec
   * @param {*} res
   */
  const recieveMessage = (req, rec, res) => {
    const request = JSON.parse(req);
    const message = messageHandler[request.type];

    request.data = JSON.parse(request.data);

    if (message) {
      message(request);
    }
  };

  init();
});
