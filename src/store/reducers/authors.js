import { FETCH_AUTHORS, FILTER_AUTHORS } from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.push(action.payload),
        filteredAuthors: state.filteredAuthors.concat(action.payload),
        loading: false
      };

    case FILTER_AUTHORS:
      return {
        ...state,
        filteredAuthors: state.filteredAuthors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
