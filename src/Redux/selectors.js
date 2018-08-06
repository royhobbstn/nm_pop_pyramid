//

import { createSelector } from 'reselect';

const getDataList = state => state.data_list;
const getPageNumber = state => state.page_number;
const getFilterInputText = state => state.filter_input_text;
const getPlaceDetail = state => state.place_detail;

const PAGE_SIZE = 10;

export const selectorSortedDataList = createSelector(
  [getDataList],
  data_list => {
    return data_list.map(d => d).sort((a, b) => a.geoname.localeCompare(b.geoname));
  }
);

export const selectorSortedFilteredDataList = createSelector(
  [selectorSortedDataList, getFilterInputText],
  (data_list, input_text) => {
    const input_chars = input_text.length;

    return data_list.filter(d => {
      const geoname_chars = d.geoname.slice(0, input_chars);
      return (geoname_chars.toUpperCase() === input_text.toUpperCase());
    });

  }
);

export const getNumberOfPages = createSelector(
  [selectorSortedFilteredDataList],
  data_list => {
    return Math.ceil(data_list.length / PAGE_SIZE);
  }
);

export const selectorPagedDataList = createSelector(
  [selectorSortedFilteredDataList, getNumberOfPages, getPageNumber],
  (data_list, number_of_pages, page_number) => {
    return data_list.slice((page_number - 1) * PAGE_SIZE, page_number * PAGE_SIZE);
  }
);


export const selectorFormatChartData = createSelector(
  [getPlaceDetail], chart_data => {

    const data = chart_data.data[0];

    return [
      { name: '0-9', Female: Number(data.b01001027) + Number(data.b01001028), Male: Number(data.b01001003) + Number(data.b01001004) },
      { name: '10-19', Female: Number(data.b01001029) + Number(data.b01001030) + Number(data.b01001031), Male: Number(data.b01001005) + Number(data.b01001006) + Number(data.b01001007) },
      { name: '20-29', Female: Number(data.b01001032) + Number(data.b01001033) + Number(data.b01001034) + Number(data.b01001035), Male: Number(data.b01001008) + Number(data.b01001009) + Number(data.b01001010) + Number(data.b01001011) },
      { name: '30-39', Female: Number(data.b01001036) + Number(data.b01001037), Male: Number(data.b01001012) + Number(data.b01001013) },
      { name: '40-49', Female: Number(data.b01001038) + Number(data.b01001039), Male: Number(data.b01001014) + Number(data.b01001015) },
      { name: '50-59', Female: Number(data.b01001040) + Number(data.b01001041), Male: Number(data.b01001016) + Number(data.b01001017) },
      { name: '60-69', Female: Number(data.b01001042) + Number(data.b01001043) + Number(data.b01001044) + Number(data.b01001045), Male: Number(data.b01001018) + Number(data.b01001019) + Number(data.b01001020) + Number(data.b01001021) },
      { name: '70-79', Female: Number(data.b01001046) + Number(data.b01001047), Male: Number(data.b01001022) + Number(data.b01001023) },
      { name: '80+', Female: Number(data.b01001048) + Number(data.b01001049), Male: Number(data.b01001024) + Number(data.b01001025) },

    ];


  });
