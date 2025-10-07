/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'https://my-landing-pages-lac.vercel.app/'
    },
    compiler: { styledComponents: true, }
}

const nextConfigProduction = {
    env: {
        // BASE_URL: 'https://my-landing-pages-lac.vercel.app',
        BASE_URL: 'https://my-landing-pages-lac.vercel.app/',
    },
    compiler: { styledComponents: true, }
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}
