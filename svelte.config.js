import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// Options for the static adapter
			pages: 'build',
			assets: 'build',
			fallback: undefined, // Set this if you want a fallback HTML file
		}),
	}
};

export default config;
