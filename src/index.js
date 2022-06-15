const { default: home } = require("./home");

import createHomepageContent from './home';
import loadTabs from './tabs';

loadTabs();
createHomepageContent();