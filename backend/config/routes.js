/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'GET /api/ping': 'AuthController.ping',
    'POST /api/auth/login': 'AuthController.login',
    'POST /api/auth/register': 'AuthController.register',
    'GET /api/auth/confirm/:token': 'AuthController.confirm',
    'POST /api/auth/email/forgot': 'AuthController.forgot',
    'POST /api/auth/email/reset/:token': 'AuthController.reset',
    'GET /api/profile/detail': 'AccountController.detail',
    'POST /api/profile/password': 'AccountController.password',
    'POST /api/profile/update': 'AccountController.update',
    'POST /api/profile/upload': 'AccountController.upload',
    'GET /api/profile/activity': 'AccountController.activity',
};
