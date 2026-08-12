import { Application } from '@hotwired/stimulus';

import DisclosureController from './controllers/disclosure_controller.js';
import TimelineDisclosureController from './controllers/timeline_disclosure_controller.js';
import './styles.css';

const application = Application.start();

application.debug = import.meta.env.DEV;
application.register('disclosure', DisclosureController);
application.register('timeline-disclosure', TimelineDisclosureController);
