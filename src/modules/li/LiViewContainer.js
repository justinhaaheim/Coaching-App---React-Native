/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LiView from './LiView';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    liList: state.settings.liList
  })
)(LiView);
