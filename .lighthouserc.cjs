module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview -- --host 127.0.0.1 --port 4183 --strictPort',
      startServerReadyPattern: 'Local',
      url: ['http://127.0.0.1:4183/'],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'network-dependency-tree-insight': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
