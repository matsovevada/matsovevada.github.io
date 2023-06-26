import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'prosess-service/build',
            assets: 'prosess-service/build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    }
};

export default config;
