module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      [
        'i18next-extract',
        {
          contextSeparator: '__',
          defaultContexts: [''],
          defaultNS: 'en',
          locales: ['nl', 'en', 'it', 'tr', 'fr', 'hi', 'ru'],
          jsonSpace: 4,
          keySeparator: null,
          nsSeparator: null,
          keyAsDefaultValue: ['en'],
          keyAsDefaultValueForDerivedKeys: false,
          outputPath: 'src/i18n/{{locale}}.json',
          discardOldKeys: true,
        },
      ],
      '@babel/proposal-class-properties',
      '@babel/transform-runtime',
    ],
  };
};