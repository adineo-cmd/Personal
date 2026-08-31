// src/data/omnimind/index.js
import { principles } from './principles.js';
import { siteMeta } from './meta.js';

import d0 from './domains/cognitivefoundation.js';
import d1 from './domains/mentalresilience.js';
import d2 from './domains/acceleratedlearning.js';
import d3 from './domains/visualization.js';
import d4 from './domains/meditation.js';
import d5 from './domains/strategicthinking.js';
import d6 from './domains/flowstate.js';
import d7 from './domains/neurooptimization.js';
import d8 from './domains/hypermemory.js';
import d9 from './domains/speedprocessing.js';
import d10 from './domains/emotionalintelligence.js';
import d11 from './domains/metalearning.js';
import d12 from './domains/timemastery.js';
import d13 from './domains/socialintelligence.js';
import d14 from './domains/identityengineering.js';
import d15 from './domains/existentialresilience.js';
import d16 from './domains/sleepoptimization.js';
import d17 from './domains/integration.js';
import d18 from './domains/metrics.js';
import d19 from './domains/linguisticmastery.js';
import d20 from './domains/spatialintelligence.js';
import d21 from './domains/digitalarchitecture.js';
import d22 from './domains/strategicdominance.js';
import d23 from './domains/groupdynamics.js';
import d24 from './domains/resourcestrategy.js';
import d25 from './domains/integrationpractices.js';
import d26 from './domains/rapidcomprehension.js';
import d27 from './domains/humanreading.js';
import d28 from './domains/academicmastery.js';
import d29 from './domains/situationalcontrol.js';

export const domains = [
  { slug: 'cognitivefoundation', ...d0 },
  { slug: 'mentalresilience', ...d1 },
  { slug: 'acceleratedlearning', ...d2 },
  { slug: 'visualization', ...d3 },
  { slug: 'meditation', ...d4 },
  { slug: 'strategicthinking', ...d5 },
  { slug: 'flowstate', ...d6 },
  { slug: 'neurooptimization', ...d7 },
  { slug: 'hypermemory', ...d8 },
  { slug: 'speedprocessing', ...d9 },
  { slug: 'emotionalintelligence', ...d10 },
  { slug: 'metalearning', ...d11 },
  { slug: 'timemastery', ...d12 },
  { slug: 'socialintelligence', ...d13 },
  { slug: 'identityengineering', ...d14 },
  { slug: 'existentialresilience', ...d15 },
  { slug: 'sleepoptimization', ...d16 },
  { slug: 'integration', ...d17 },
  { slug: 'metrics', ...d18 },
  { slug: 'linguisticmastery', ...d19 },
  { slug: 'spatialintelligence', ...d20 },
  { slug: 'digitalarchitecture', ...d21 },
  { slug: 'strategicdominance', ...d22 },
  { slug: 'groupdynamics', ...d23 },
  { slug: 'resourcestrategy', ...d24 },
  { slug: 'integrationpractices', ...d25 },
  { slug: 'rapidcomprehension', ...d26 },
  { slug: 'humanreading', ...d27 },
  { slug: 'academicmastery', ...d28 },
  { slug: 'situationalcontrol', ...d29 },
];

export { principles, siteMeta };

export const diffLabels = {
  'd-beg': 'Beginner',
  'd-int': 'Intermediate',
  'd-adv': 'Advanced',
  'd-mas': 'Mastery'
};

export const getTechniqueCount = (domain) => {
  return domain.subdomains.reduce((sum, sub) => sum + sub.techniques.length, 0);
};

export const getTotalTechniqueCount = (domainsArray = domains) => {
  return domainsArray.reduce((sum, domain) => sum + getTechniqueCount(domain), 0);
};