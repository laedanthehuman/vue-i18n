import  * as TYPES  from './mutations-types.js'

export default {
    [TYPES.LANGUAGE_GET_DATE] (state, obj) {
        state.language = obj.language
        state.i18n = obj.data
    },
    [TYPES.FALLBACK_LANGUAGE_GET_DATE] (state, obj) {
        state.language = obj.language
        state.i18n = obj.data
    }
}