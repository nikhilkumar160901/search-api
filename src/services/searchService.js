const Search = require('../models/searchModel');
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

const searchService = {
  getSuggestions: async (prefix) => {
    const cacheKey = `suggestions:${prefix}`;
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const suggestions = await Search.find({
      term: { $regex: `^${prefix}`, $options: 'i' },
    })
      .sort({ count: -1 })
      .limit(10);

    await client.set(cacheKey, JSON.stringify(suggestions), 'EX', 60); // Cache for 60 seconds
    return suggestions;
  },

  updateSearchCount: async (term) => {
    await Search.findOneAndUpdate(
      { term },
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
  },
};

module.exports = searchService;