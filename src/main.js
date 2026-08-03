import { Application } from '@hotwired/stimulus';

import './styles.css';

const application = Application.start();

application.debug = import.meta.env.DEV;
