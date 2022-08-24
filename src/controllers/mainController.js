// Require's
const fs = require('fs');
const path = require('path');

const mainController = {
    home: (req, res) => {
      res.render('./main/index.ejs');
    }
};

module.exports = mainController;