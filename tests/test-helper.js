import Application from 'mini-store/app';
import config from 'mini-store/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
