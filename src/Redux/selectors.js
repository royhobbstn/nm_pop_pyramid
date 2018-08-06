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

    // TODO: turn ACS data into Chart Data

    return [
      { name: 'Age 0-4', uv: 4000, Female: 2400, Male: 2400 },
      { name: 'Age 5-9', uv: 3000, Female: 1398, Male: 2210 },
      { name: 'Page C', uv: 2000, Female: 9800, Male: 2290 },
      { name: 'Page D', uv: 2780, Female: 3908, Male: 2000 },
      { name: 'Page E', uv: 1890, Female: 4800, Male: 2181 },
      { name: 'Page F', uv: 2390, Female: 3800, Male: 2500 },
      { name: 'Page G', uv: 3490, Female: 4300, Male: 2100 },
    ];

  });
