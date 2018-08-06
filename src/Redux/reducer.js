//

const default_state = {
  data_list: [],
  main_data_busy: false,
  selected_row: 0,
  page_number: 1,
  filter_input_text: ''
};

const reducer = (
  state = default_state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_FILTER_INPUT_TEXT':
      return Object.assign({}, state, { filter_input_text: action.data });
    case 'SET_MAIN_DATA':
      return Object.assign({}, state, { data_list: action.data, main_data_busy: false });
    case 'SET_MAIN_DATA_BUSY':
      return Object.assign({}, state, { main_data_busy: true });
    case 'SELECT_ROW':
      return Object.assign({}, state, { selected_row: 0 });
    case 'CHANGE_TABLE_PAGE':
      return Object.assign({}, state, { page_number: action.page });
    default:
      return state;
  }
};

export default reducer;
