var express = require('express');
var router = express.Router();
var mockContentData = require('../mock-content-data.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  const templateData = {
    ...mockContentData,
    blocks: mockContentData.blocks.map(block => {
      switch(block.blockType) {
        case 'hero':
          return {
            ...block,
            isHeroBlock: true
          };
        case 'logos':
          return {
            ...block,
            isLogosBlock: true
          };
        case 'three-columns':
          return {
            ...block,
            isThreeColumnBlock: true
          };
        default:
          return block;
      }
    })
  }

  res.render('index', templateData);
});

module.exports = router;
