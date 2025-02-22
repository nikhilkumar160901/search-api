const searchService = require('../services/searchService');

const searchController = {
  getSuggestions: async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ message: 'Query parameter "q" is required' });
      }

      const suggestions = await searchService.getSuggestions(q);
      res.json(suggestions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  logSearch: async (req, res) => {
    try {
      const { term } = req.body;
      if (!term) {
        return res.status(400).json({ message: 'Search term is required' });
      }

      await searchService.updateSearchCount(term);
      res.json({ message: 'Search logged successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = searchController;