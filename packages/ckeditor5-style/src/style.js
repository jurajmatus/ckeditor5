/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module TODO
 */

import { Plugin } from 'ckeditor5/src/core';

import StyleUI from './styleui';
import StyleCommand from './stylecommand';

/**
 * TODO
 *
 * @extends module:core/plugin~Plugin
 */
export default class Style extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Style';
	}

	static get requires() {
		return [ StyleUI ];
	}

	/**
	 * @inheritDoc
	 */
	init() {
		this.editor.commands.add( 'style', new StyleCommand( this.editor ) );
	}
}