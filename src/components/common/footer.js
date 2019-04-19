import React from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Icon from './icon';
const footer = ({active}) => {
  const { t } = useTranslation();
  const datas = [
    {
      link: '/',
      text: 'Mua bán',
      icon: 'ic_buy_sale'
    },
    {
      link: '/buy/',
      text: 'Sản phẩm',
      icon: 'ic_product'
    },
    {
      link: '/user/',
      text: 'Tài sản',
      icon: 'mua'
    },
    {
      link: '/trade/',
      text: 'Quản lý GD',
      icon: 'ic_tradingM'
    }
  ];
  return (
    <div className="footer-wrapper fixed-bottom">
      {_.map(datas, (item, index) => (
        <Link key={index} to={item.link} className={active === item.link && 'active'}>
          <Icon name={item.icon} height="35" />
          {t(item.text)}
        </Link>
      ))}
    </div>
  );
};
footer.propTypes = {};
export default footer;
