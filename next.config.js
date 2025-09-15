/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000'
    },
    compiler: { styledComponents: true, }
}

const nextConfigProduction = {
    env: {
        BASE_URL: 'https://my-landing-pages-lac.vercel.app',
        // BASE_URL: 'http://localhost:9000',
    },
    compiler: { styledComponents: true, }
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}
