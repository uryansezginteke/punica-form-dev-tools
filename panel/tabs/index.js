let $tabs = null;
let $selectedTab = null;

/**
 *
 * @param {*} e
 */
const handleClick = (e) => {
  const $target = $(e.target);

  setActiveTab($target);
};

/**
 *
 * @param {*} $e
 */
const setActiveTab = ($e) => {
  if ($selectedTab) {
    $selectedTab.removeClass("tab-is-selected");
  }

  $selectedTab = $e.addClass("tab-is-selected");

  const messageId = $selectedTab.data("message-id");

  passiveActiveEvent();
  updateContentTitle($e.text());
  showJson(messages[messageId]);
};

/**
 *
 */
const passiveActiveTab = () => {
  if ($selectedTab) {
    $selectedTab.removeClass("tab-is-selected");
    $selectedTab = null;
  }
};

$(document).ready(function () {
  $tabs = $(".tab").on("click", handleClick);
});
