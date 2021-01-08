const axios = require('axios');
const queryString = require("query-string");
const API_URL = 'https://dev.to/api';

module.exports = async ({
    API_KEY,
    pageSize,
    reporter
}) => {
    reporter.info(`Starting to fetch data from dev.to - ${API_URL}`)

    // Set query parameters
    const params = queryString.stringify({
        "per_page": pageSize
    });

    // Make API request.
    const response = await axios(`${API_URL}/articles/me/published?${params}`, {
        headers: {
            "cache-control": "no-cache",
            "api-key": API_KEY
        }
    });

    return await response.data;
}

