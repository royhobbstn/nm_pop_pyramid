import React from 'react';

import { connect } from 'react-redux';

import MainTable from './MainTable';
import PaginationControl from './PaginationControl';
import Loading from './Loading';
import ChartModal from './ChartModal';

import { actionUpdateFilterInputText } from '../Redux/actions';

import { Input } from 'semantic-ui-react';


const App = ({ filter_input_text, updateFilterInputText, main_data_busy }) => {
  return (
    <div className="main_content">
        <p>Click a city in the table below to produce a population profile.</p>
        <Input 
          value={filter_input_text}
          onChange={ (evt, data) => {
              updateFilterInputText(data.value);
            }} 
          focus  icon='search' placeholder='Search...' />
        <br /><br />
        {main_data_busy ? <Loading /> : <MainTable />}
        <PaginationControl />
        <ChartModal />
      </div>
  );
};

export default connect((state) => ({
  filter_input_text: state.filter_input_text,
  main_data_busy: state.main_data_busy
}), {
  updateFilterInputText: actionUpdateFilterInputText
})(App);
