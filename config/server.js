module.exports = ({ env }) => ({
  host: env('HOST', 'https://strapi-backend-azure.vercel.app/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['yourKey1', 'yourKey2', 'yourKey3']),
  },
});
