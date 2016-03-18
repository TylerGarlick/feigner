'use strict';

import { Server } from 'hapi';


const configuration = [
  {
    path: '',
    method: [],
    config: {},
    response: {
      status: 200,
      headers: {},
      body: {}
    }
  },
  {
    path: '',
    method: [],
    config: {},
    handler: (request, reply) => {

    }
  }
];


export default class Feigner {

  /**
   * Creates a new Feigner
   *
   * @public
   * @constructor
   *
   * @param {Object} [options]
   * @param {String} [options.host]
   * @param {String} [options.address]
   * @param {Number} [options.port]
   * @param {String} [options.uri]
   */
  constructor(options = {}) {
    this.server = new Server();
    this.server.connection(options);
  }

  /**
   * Starts the server
   */
  start() {
    this.server.start();
  }

  /**
   * Stops the server
   */
  stop() {
    this.server.stop({}, (err) => {
      console.log(err);
    });
  }

}
