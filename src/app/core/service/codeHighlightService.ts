'use strict';
import {Injectable} from '@angular/core';

@Injectable()
export class CodeHighlightService {

    public static getHighlightLanguages() {
        return {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            css: () => import('highlight.js/lib/languages/css')
        };
    }
}
