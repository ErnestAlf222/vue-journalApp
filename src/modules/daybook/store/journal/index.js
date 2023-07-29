// Creación de un módulo

import state from './state'

import * as actions from './actions'
import * as getters from './getter'
import * as mutations from './mutations'

const journalModule = {
    namedSpaced:true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule