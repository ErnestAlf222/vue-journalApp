// export const myGetter = async(state) => {
//     return state

// }
// *Leer el state y traer la info como se necesita
export const getEntriesByTerm = (state) => ( term = '' ) =>{
    // Regresa todas las entradas que hay
    if (term.length == 0) return state.entries

    return state.entries.filter(entry => 
        entry.text.toLowerCase().includes(term.toLocaleLowerCase()
        )
    )

}
export const getEntryById = (state) => (id='') => {
    const entry = state.entries.find(entry => entry.id === id)
    
    if (!entry) return;
    return {...entry}

}