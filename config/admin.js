module.exports = ({ env }) => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET || 'your-generated-secret-here',
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'your-generated-salt-here',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
