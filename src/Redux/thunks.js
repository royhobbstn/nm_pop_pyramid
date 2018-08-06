//


import { actionMainDataBusy, actionPopulateMainData } from './actions.js';

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
