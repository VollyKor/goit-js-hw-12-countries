import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

import "@pnotify/core/dist/PNotify.css"
import "@pnotify/mobile/dist/PNotifyMobile.css"
import '@pnotify/core/dist/BrightTheme.css'
import { error, defaults } from '@pnotify/core';

function tooManyError (){
    error({
        text: 'Too many matches found. Please enter a more specific query',
        type: 'error',
        delay: 5000,
        sticker: false,
        maxTextHeight: null
    })
    }

function notFoundError (){
    error({
        text: 'Error 404. Not found',
        type: 'error',
        delay: 2000,
        sticker: false,
        maxTextHeight: null
    })
}
export {tooManyError, notFoundError}