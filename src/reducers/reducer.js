const initState = {
  data: [],
  loading: true,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {...state, data: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
  }
  return state;
};
export default reducer;
