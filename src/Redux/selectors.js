//

import { createSelector } from 'reselect';

const getDataList = state => state.data_list;
const getPageNumber = state => state.page_number;
const getFilterInputText = state => state.filter_input_text;

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

    // enforce 2 character minimum
    if (input_chars <= 2) {
      return data_list;
    }

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
