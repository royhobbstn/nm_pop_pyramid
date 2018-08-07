//

const default_state = {
  data_list: [],
  main_data_busy: false,
  selected_row: 0,
  page_number: 1,
  filter_input_text: '',
  modal_open: false,
  modal_data_busy: false,
  place_detail: []
};

const reducer = (
  state = default_state,
  action
) => {
  switch (action.type) {
    case 'POPULATE_PLACE_DETAIL':
      return Object.assign({}, state, { place_detail: action.data, modal_data_busy: false });
    case 'UPDATE_FILTER_INPUT_TEXT':
      return Object.assign({}, state, { filter_input_text: action.data, page_number: 1 });
    case 'SET_MAIN_DATA':
      return Object.assign({}, state, { data_list: action.data, main_data_busy: false });
    case 'SET_MAIN_DATA_BUSY':
      return Object.assign({}, state, { main_data_busy: true });
    case 'SELECT_ROW':
      return Object.assign({}, state, { selected_row: 0, modal_open: true, modal_data_busy: true, place_detail: [] });
    case 'CHANGE_TABLE_PAGE':
      return Object.assign({}, state, { page_number: action.page });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, { modal_open: false });
    default:
      return state;
  }
};

export default reducer;
