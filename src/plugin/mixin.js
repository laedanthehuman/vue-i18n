export default function (Vue, adapters,store,params) {
    Vue.mixin({ beforeCreate: () => (i18nInit(adapters,store,params)) } )
}

function i18nInit (adapters, store, params) {
    debugger
    let getter = adapters.http
    let i18n

    if (!params.languages){
        return new Error(`Cannot infer what language to use! please, supply the languages array`)
    }
    if (params.languages.length === 1){
        i18n = params.languages[0]
    }
    if(!i18n) {
          return new Error(`Cannot infer what language to use! `)
    }
    Promise.resolve(getter(i18n.location))
        .then(value => {
            let data = value.data | value
            Object.defineProperties(store.state,{
                'i18n': {
                    get () {
                        return {
                            messages:data,
                            language:i18n.language       
                        }
                    }
                }
            })
        })
        .catch((error) => new Error(`Cannot infer what language to use! ${error}`))
}
