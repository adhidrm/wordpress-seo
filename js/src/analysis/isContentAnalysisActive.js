var getL10nObject = require( "./getL10nObject" );

import { get } from "lodash-es";

/**
 * Returns whether or not the content analysis is active
 *
 * @returns {boolean} Whether or not the content analysis is active.
 */
function isContentAnalysisActive() {
	const l10nObject = getL10nObject();

	return get( l10nObject, "contentAnalysisActive", 0 ) === 1;
}

module.exports = isContentAnalysisActive;
