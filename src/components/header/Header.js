import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from './styles';

import Logo from '../../assets/logo-covid.svg';

export default function Header() {
  return (
    <Link to="/">
      <Head>
        <img src={Logo} alt="logo" />
      </Head>
    </Link>
  );
}
