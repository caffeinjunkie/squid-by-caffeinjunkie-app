import React from 'react';

import { Dashboard } from '../screens/Dashboard';
import { Ngens } from '../screens/Blank';

const TabIconOptions = {
  DASHBOARD: {
    name: 'Dashboard',
    icon: 'home',
    component: Dashboard
  },
  ANALYTICS: {
    name: 'Analytics',
    icon: 'activity',
    component: Ngens
  },
  BUDGET: {
    name: 'Budget',
    icon: 'pie-chart',
    component: Ngens
  },
  PROFILE: {
    name: 'Profile',
    icon: 'user',
    component: Ngens
  }
}

export default {
  TabIconOptions
}
