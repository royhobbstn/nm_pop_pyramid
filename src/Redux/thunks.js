//


import { actionMainDataBusy, actionPopulateMainData, actionSelectRow, actionPopulatePlaceDetail } from './actions.js';

// place list loaded on startup
export function thunkGetStartupData(geoid, name, coords) {
  return (dispatch, getState) => {

    dispatch(actionMainDataBusy());

    window.fetch(`/place-data`)
      .then(res => res.json())
      .then(fetched_data => {
        dispatch(actionPopulateMainData(fetched_data));
      })
      .catch(err => {
        console.error('err:', err);
      });

  };
}

// population data loaded on table row click
export function thunkSelectRow(geonum) {
  return (dispatch, getState) => {

    dispatch(actionSelectRow(geonum));

    window.fetch(`/place-detail?geonum=${geonum}`)
      .then(res => res.json())
      .then(fetched_data => {
        dispatch(actionPopulatePlaceDetail(fetched_data));
      })
      .catch(err => {
        console.error('err:', err);
      });

  };
}
