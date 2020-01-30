import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';

import '../index.scss';
import Main from '../index'

import { AppMain } from './AppMain';

function prepare(){
    if (!String.prototype.splice) {
        /**
         * {JSDoc}
         *
         * The splice() method changes the content of a string by removing a range of
         * characters and/or adding new characters.
         *
         * @this {String}
         * @param {number} start Index at which to start changing the string.
         * @param {number} delCount An integer indicating the number of old chars to remove.
         * @param {string} newSubStr The String that is spliced in.
         * @return {string} A new string with the spliced substring.
         */
        String.prototype.splice = function(start: number, delCount: number, newSubStr: string): string {
            return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
        };
    }
}

/* entry */ const $appElement = $('html body #app'); $appElement.ready(()=>{
    prepare()

    const main: AppMain = new Main() as AppMain; main.onStart();

    ReactDOM.render((
        <ReactRouterDOM.HashRouter>
            {main.onRender()}
        </ReactRouterDOM.HashRouter>),
        $appElement[0]);

});