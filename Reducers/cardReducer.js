export const cardReducer = (state, action) => {

  switch (action.type) {
    case 'INIT_CARD':
      return state = action.storedCards;

    case 'ADD_CARD':
  
      return [...state, {
        problem: action.cards.problem,
        category: action.cards.category,
        count: action.cards.count,
        index: action.cards.index
      }]

    case 'EDIT_CARD':

      // get the index we need to splice then insert
      // get the New value here and splice it 
      for (var i = 0; i < state.length; i++) {
       
        if (state[i].index === action.editIndex) {
          
          state[i] = {
            problem: action.problem,
            category: action.category,
            count: action.count,
            index: action.editIndex
          }
          return state;
        }
      }

    case 'DELETE_CARD':
      return state.filter(cards => cards.index !== action.index);
    default:
      return state;
  }

}