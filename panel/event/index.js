let messages = {};
let $selectedEvent = null;
let $leftPanel = null;

/**
 *
 */
const handleEventClick = (e) => {
  const $target = $(e.target);

  setActiveEvent($target);
};

/**
 *
 * @param {*} $e
 */
const setActiveEvent = ($e) => {
  passiveActiveEvent();

  $selectedEvent = $e.addClass("event-is-selected");

  const reqId = $selectedEvent.data("req-id");

  passiveActiveTab();
  updateContentTitle("PAYLOAD");
  showJson(messages[reqId]);
};

/**
 *
 */
const passiveActiveEvent = () => {
  if ($selectedEvent) {
    $selectedEvent.removeClass("event-is-selected");
    $selectedEvent = null;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
const createNewEvent = (req) => {
  const $rule = $("<hr />").addClass("event-rule");
  const $event = $("<div></div>")
    .addClass("event")
    .on("click", handleEventClick)
    .append(`<p>${req.type}</p>`)
    .attr("data-req-id", req.id);

  if (req.data.formItemKey) {
    $event.append(`<span>${req.data.formItemKey}</span>`);
  }

  $leftPanel.append($event).append($rule);
  $leftPanel.scrollTop($event.offset().top);

  return $event;
};

/**
 *
 */
const removeMessages = () => {
  messages = {};
  $leftPanel.html("");
};

$(document).ready(function () {
  $leftPanel = $(".panel-left");
});
