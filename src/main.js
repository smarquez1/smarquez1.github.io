import { Application } from '@hotwired/stimulus';

import AnimatedDisclosureController from './controllers/animated_disclosure_controller.js';
import TimelineDisclosureController from './controllers/timeline_disclosure_controller.js';
import './styles.css';

const application = Application.start();

application.debug = import.meta.env.DEV;
application.register('animated-disclosure', AnimatedDisclosureController);
application.register('timeline-disclosure', TimelineDisclosureController);
