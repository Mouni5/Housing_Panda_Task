import express from 'express';
import { createListing, getAllListings } from '../controllers/ListingController.js';
import validateListing from '../middleware/validateListing.js';

const router = express.Router();

// POST /api/listings
router.post('/', validateListing, createListing);

// GET /api/listings
router.get('/', getAllListings);

export default router;


