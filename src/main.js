import { Application } from '@hotwired/stimulus';

import AnimatedDetailsController from './controllers/animated_details_controller.js';
import TimelineDisclosureController from './controllers/timeline_disclosure_controller.js';
import './styles.css';

const application = Application.start();

application.debug = import.meta.env.DEV;
application.register('animated-details', AnimatedDetailsController);
application.register('timeline-disclosure', TimelineDisclosureController);
