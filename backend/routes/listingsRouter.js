const express = require("express");
const router = express.Router();

const {
  getListings,
  getListingsByType,
  getListingsCount,
  getListingsByTypeCount,
  getOneListing,
  updateListing,
  getFilteredListings,
  getFilteredListingsCount
} = require("../controllers/listingsController");

router.get("/search/count/:airbnb_city/:guests", getFilteredListingsCount);
router.get("/search/:airbnb_city/:guests/:page", getFilteredListings);
router.get("/one/:_id", getOneListing);
router.get("/count/:property_type", getListingsByTypeCount);
router.get("/count", getListingsCount);
router.get("/:property_type/:pageNumber", getListingsByType);
router.get("/:pageNumber", getListings);
router.put("/:_id", updateListing);

module.exports = router;
