/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Normal distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-normal-cdf
*
* @example
* var cdf = require( '@stdlib/stats-base-dists-normal-cdf' );
*
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns ~0.977
*
* var myCDF = cdf.factory( 10.0, 2.0 );
* y = myCDF( 10.0 );
* // returns 0.5
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
