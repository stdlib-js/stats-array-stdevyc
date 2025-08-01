/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import AccessorArray = require( '@stdlib/array-base-accessor' );
import stdevyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdevyc( x ); // $ExpectType number
	stdevyc( new AccessorArray( x ) ); // $ExpectType number

	stdevyc( x, 1.0 ); // $ExpectType number
	stdevyc( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdevyc( 10 ); // $ExpectError
	stdevyc( '10' ); // $ExpectError
	stdevyc( true ); // $ExpectError
	stdevyc( false ); // $ExpectError
	stdevyc( null ); // $ExpectError
	stdevyc( undefined ); // $ExpectError
	stdevyc( {} ); // $ExpectError
	stdevyc( ( x: number ): number => x ); // $ExpectError

	stdevyc( 10, 1.0 ); // $ExpectError
	stdevyc( '10', 1.0 ); // $ExpectError
	stdevyc( true, 1.0 ); // $ExpectError
	stdevyc( false, 1.0 ); // $ExpectError
	stdevyc( null, 1.0 ); // $ExpectError
	stdevyc( undefined, 1.0 ); // $ExpectError
	stdevyc( {}, 1.0 ); // $ExpectError
	stdevyc( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdevyc( x, '10' ); // $ExpectError
	stdevyc( x, true ); // $ExpectError
	stdevyc( x, false ); // $ExpectError
	stdevyc( x, null ); // $ExpectError
	stdevyc( x, [] ); // $ExpectError
	stdevyc( x, {} ); // $ExpectError
	stdevyc( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdevyc(); // $ExpectError
	stdevyc( x, 1.0, {} ); // $ExpectError
}
