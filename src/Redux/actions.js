//


export function actionPopulateMainData(data) {
  return {
    type: 'SET_MAIN_DATA',
    data
  };
}

export function actionMainDataBusy() {
  return {
    type: 'SET_MAIN_DATA_BUSY'
  };
}

export function actionSelectRow(geonum) {
  return {
    type: 'SELECT_ROW',
    geonum
  };
}

export function actionChangeTablePage(page) {
  return {
    type: 'CHANGE_TABLE_PAGE',
    page
  };
}

export function actionUpdateFilterInputText(data) {
  return {
    type: 'UPDATE_FILTER_INPUT_TEXT',
    data
  };
}
