/**
 *
 * @param {*} req
 */
const init = (req) => {
  req.id = uuid();

  messages[req.id] = req.data;
  messages["FORM_DATA"] = req.data;

  setActiveEvent(createNewEvent(req));
};

/**
 *
 * @param {*} req
 */
const entity = (req) => {
  req.id = "ENTITY";

  messages[req.id] = req.data;
};

/**
 *
 * @param {*} req
 */
const update = (req) => {
  req.id = "FORM_DATA";

  messages[req.id] = req.data;
};

/**
 *
 * @param {*} req
 */
const reset = (req) => {
  req.id = "FORM_DATA";

  messages[req.id] = req.data;
};

/**
 *
 * @param {*} req
 */
const registerItems = (req) => {
  removeMessages();

  req.id = "REGISTER_ITEMS";

  messages[req.id] = req.data;
};

/**
 *
 * @param {*} req
 */
const updateItem = (req) => {
  req.id = uuid();

  messages[req.id] = req.data;

  setActiveEvent(createNewEvent(req));
};

/**
 *
 * @param {*} req
 */
const updatePropertyValue = (req) => {
  req.id = uuid();

  messages[req.id] = req.data;

  setActiveEvent(createNewEvent(req));
};

const messageHandler = {
  "@@INIT": init,
  ENTITY: entity,
  UPDATE: update,
  RESET: reset,
  UPDATE_ITEM: updateItem,
  REGISTER_ITEMS: registerItems,
  UPDATE_PROPERTY_VALUE: updatePropertyValue,
};
