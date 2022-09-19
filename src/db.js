/**
 * The db module is a basic, general-purpose key-value store database.
 */
let database = {} // Yep, it’s “just an object.”

// We return certain error messages. This is where we define them.
const ERROR_STRINGS_ONLY = 'This database only accepts strings as values'
const ERROR_ENTRY_ALREADY_EXISTS = 'Database already contains a value under this key'

// Don’t hesitate to write utility functions that may capture computations that may be repeated
// throughout the database implementation. Put them here, if any.

/**
 * Initializes the database as new and empty.
 */
const initialize = async () => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

/**
 * Creates an entry for the given value under the given key. Throws an error if the value is not
 * a string or if there is already a value under that key.
 *
 * @param {string} key the key under which to store the value
 * @param {string} value the value to store
 * @returns the value that was added
 */
const createEntry = async (key, value) => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

/**
 * Retrieves the value under the given key.
 *
 * @param {string} key the key under which to locate the value
 * @returns the value under this key, or undefined if there is no such entry
 */
const retrieveValueByKey = async key => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

/**
 * Retrieves the values whose keys match the given pattern.
 *
 * @param {regex} keyRegex the regular expression to match against existing keys
 * @returns array of values that match this key pattern
 */
const retrieveValuesByMatchingKey = async keyRegex => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

/**
 * Modifies the value under the given key to the given value.
 *
 * @param {string} key the key whose value we would like to modify
 * @param {string} value the new value for this key
 * @returns the modified value, or undefined if there was no such entry
 */
const updateEntry = async (key, value) => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

/**
 * Removes the value under the given key.
 *
 * @param {string} key
 * @returns the value that was deleted, or undefined if there was no such entry
 */
const deleteEntry = async key => {
  // TODO TODO TODO ***** IMPLEMENT ME *****
}

export {
  initialize,
  createEntry,
  retrieveValueByKey,
  retrieveValuesByMatchingKey,
  updateEntry,
  deleteEntry,
  ERROR_STRINGS_ONLY,
  ERROR_ENTRY_ALREADY_EXISTS
}
