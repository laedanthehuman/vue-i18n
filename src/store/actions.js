
// https://vuex.vuejs.org/en/actions.html
import * as TYPES from './mutations-types.js'
import axios from 'axios'

export default {
    languageGetData ({ commit,dispatch }, obj) {
        axios.get(obj.url, obj.params)
            .then(response => {
                commit(TYPES.LANGUAGE_GET_DATE,{
                    language: obj.language,
                    data: response.data
                })
                Promise.resolve
            })
            .catch(error => {
                dispatch('fallbackLanguageData',obj)
                Promise.reject(error)
            })
    },
    fallbackLanguageData ({commit}, obj) {
        axios.get(obj.fallbackUrl, obj.params)
            .then(response => {
                commit(TYPES.FALLBACK_LANGUAGE_GET_DATE,{
                    language: obj.language,
                    data: response.data
                })
                Promise.resolve
            })
            .catch(error => Promise.reject(error))
    }
}
