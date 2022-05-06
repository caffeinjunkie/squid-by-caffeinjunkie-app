import { Dashboard } from '../screens/Dashboard';
import { Ngens } from '../screens/Blank';

const TabItemOptions = {
  DASHBOARD: {
    name: 'Dashboard',
    icon: 'home',
    component: Dashboard
  },
  INSIGHT: {
    name: 'Insight',
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
};

export default {
  TabItemOptions
};
