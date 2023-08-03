// export const myGetter = (state) => {
    

// }

export const setEntries = ( state, entries ) => {
    // Crear un arreglo con valores anteriores + nuevos valores 
    state.entries = [...state.entries, ...entries ]
    state.isLoading= false

    

}
export const updateEntry = (state, entry) => {
    const idx = state.entries.map(e => e.id ).indexOf(entry.id)
    state.entries[idx] = entry
    

}
export const addEntry = (state, entry) => {
    // La nueva entrada va a ser la primera
    state.entries = [entry, ...state.entries]
    

}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter(entry => entry.id !== id )

}