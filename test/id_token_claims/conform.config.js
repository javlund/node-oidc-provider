const { clone } = require('lodash');

const config = clone(require('../default.config'));

config.features = { conformIdTokenClaims: true, claimsParameter: true, alwaysIssueRefresh: true };

module.exports = {
  config,
  clients: [{
    client_id: 'client',
    token_endpoint_auth_method: 'none',
    grant_types: ['authorization_code', 'implicit', 'refresh_token'],
    response_types: [
      'code id_token token', 'code id_token', 'code token', 'code', 'id_token token', 'id_token',
    ],
    redirect_uris: ['https://client.example.com/cb'],
  }],
};
