/**
 * @brief Creates the global variables used throughout the project.
 * @param refer refers to the 'create' function context
 */

function createVariables(refer) {
    refer.getData = Object.assign({}, JSON.parse(localStorage.getItem("gameData") || {}));
} 