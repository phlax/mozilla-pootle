/*
 * Copyright (C) Pootle contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import L20nEditorContainer from './L20nEditorContainer';
import L20nSource from './L20nSource';
import L20nSuggestionValue from './L20nSuggestionValue';
import L20nViewUnit from './L20nViewUnit';


const L20nAdaptor = {
  editorComponent: L20nEditorContainer,
  suggestionValueComponent: L20nSuggestionValue,
  unitSourceComponent: L20nSource,
  viewUnitComponent: L20nViewUnit,
};


export default L20nAdaptor;
