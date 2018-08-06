import React from 'react';

import { connect } from 'react-redux';

import Loading from './Loading';
import Chart from './Chart';

import { actionCloseModal } from '../Redux/actions';

import { Modal, Header } from 'semantic-ui-react';

const ChartModal = ({ modal_open, closeModal, modal_data_busy }) => {

  return <Modal 
    closeIcon
    open={modal_open}
    onClose={closeModal}>
    <Modal.Content>
      <Modal.Description>
        <Header>Population Profile</Header>
        {modal_data_busy ? <Loading /> : <Chart />}
      </Modal.Description>
    </Modal.Content>
  </Modal>;

};


export default connect((state) => ({
  modal_open: state.modal_open,
  modal_data_busy: state.modal_data_busy
}), {
  closeModal: actionCloseModal
})(ChartModal);
