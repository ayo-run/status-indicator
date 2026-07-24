import { wcbStaticProps, distPaths } from 'web-component-base/cem-plugin'

export default {
  globs: ['src/**/*.{js,ts}'],
  outdir: '.',
  plugins: [wcbStaticProps(), distPaths()],
}
