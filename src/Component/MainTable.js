import React from 'react';

import { connect } from 'react-redux';

import { selectorPagedDataList } from '../Redux/selectors';
import { thunkSelectRow } from '../Redux/thunks';

import { Table } from 'semantic-ui-react';


const MainTable = ({ paged_data_list, selectRow }) => {

  return <Table celled unstackable selectable className="table_styling">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Census Place Name</Table.HeaderCell>
        <Table.HeaderCell className="pop_column">Population</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {paged_data_list.map(row=> {
      return (
      <Table.Row key={row.geonum} onClick={()=>{selectRow(row.geonum)}}>
        <Table.Cell>{row.geoname}</Table.Cell>
        <Table.Cell className="pop_column">{row.population.toLocaleString()}</Table.Cell>
      </Table.Row>
      );
    }) }
    </Table.Body>

  </Table>;

};


export default connect((state) => ({
  paged_data_list: selectorPagedDataList(state)
}), {
  selectRow: thunkSelectRow
})(MainTable);
