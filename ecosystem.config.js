module.exports = {
  apps: [
    {
      name: 'mndplay',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 43431,
        NODE_ENV: 'production',
      },
    },
  ],
};