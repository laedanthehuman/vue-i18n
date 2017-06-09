import Vue from 'vue'
import axios from 'axios';

/**
 * The default options.
 *
 * @param baseUrl
 *    the base URL of the localization files, which could be either an absolute
 *    URL or a relative URL. The url should not ending with a slash. The default
 *    value is "i18n".
 * @param fallbackLanguage
 *    the code of the fallback language. If the localization file for a
 *    specified language is failed to load, the localization file for fallback
 *    language will be load.
 * @param timeout
 *    The timeout for the AJAX calls, in milliseconds. Default value is 500.
 */
let opts = {
  baseUrl: "i18n",
  fallbackLanguage: "en-US",
  timeout: 500,
}

const $setLanguage = (store, language = opts.fallbackLanguage, ops = opts) => {
    let url = opts.baseUrl + "/" + language + ".json";
    let fallbackUrl = opts.baseUrl + "/" + opts.fallbackLanguage + ".json";
    store.dispatch('languageGetData',{
        url:url,
        fallbackUrl:fallbackUrl,
        language:language,
        params:{
            timeout:opts.timeout
        }
    })
}

export default function install (Vue,{store}) {
    $setLanguage(store)
    Object.defineProperties(Vue.prototype,{
        '$setLanguage': {
             get () { 
                return $setLanguage
            }
        }
    })
}
