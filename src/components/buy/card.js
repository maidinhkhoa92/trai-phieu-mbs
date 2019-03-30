import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Icon from '../common/icon';
const card = props => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <button
            className="btn-transparent"
            onClick={() => history.push({ pathname: '/buy/' + props.item.bondCode })}
          >
            {t(props.item.bondName)}
          </button>
          <span className="link">
            <span className="badge badge-danger">
              {props.item.termRate}%/{t('năm')}
            </span>
            <button onClick={() => history.push({ pathname: '/buy/' + props.item.bondCode })}>
              <Icon name="arrow" width="18" height="24" />
            </button>
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Đang còn')}
          <p className="float-right">
            <span className="quatity">{props.item.roomBalance}</span> {t('trái phiếu')}
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object
};
export default card;