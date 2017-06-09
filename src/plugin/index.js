import applyMixin from './mixin'

let adapters = {
    http:null,
    
}
export default function install (_Vue, {store, params, axios} ) {
    if (!params || !store) {
        return new Error(`Cannot install plugin without store or language params`)
    }
    adapters.http = axios.get
    applyMixin(_Vue, adapters,store,params)

}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
