import React from 'react';

import { connect } from 'react-redux';

import { actionChangeTablePage } from './Redux/actions';
import { getNumberOfPages } from './Redux/selectors';

import { Pagination, Icon } from 'semantic-ui-react';

const PaginationControl = ({ page_number, handlePageChange, total_pages }) => {

  return <Pagination
            className="pagination_control"
            activePage={page_number}
            onPageChange={(evt, data)=> {
              handlePageChange(data.activePage);
            }}
            boundaryRange={0}
            siblingRange={0}
            totalPages={total_pages}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            size="mini"
          />;

};


export default connect((state) => ({
  page_number: state.page_number,
  total_pages: getNumberOfPages(state)
}), {
  handlePageChange: actionChangeTablePage
})(PaginationControl);
