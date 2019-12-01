'use strict';
import {Injectable} from '@angular/core';

@Injectable()
export class CodeHighlightService {

    public static getHighlightLanguages() {
        return {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            css: () => import('highlight.js/lib/languages/css'),
            java: () => import('highlight.js/lib/languages/java'),
            javascript: () => import('highlight.js/lib/languages/javascript'),
            json: () => import('highlight.js/lib/languages/json'),
            xml: () => import('highlight.js/lib/languages/xml'),
        };
    }
}
