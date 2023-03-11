import React from 'react';
import { DPIconLoading } from '../../assets/images/icons';
import './styles.css';

const Loading = () => {
  return (
    <span>
      <DPIconLoading className="spinner" />
    </span>
  );
};

export default Loading;
