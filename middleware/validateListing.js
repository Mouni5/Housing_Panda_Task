const validateListing = (req, res, next) => {
    const { title, description, rent, address, numberOfRooms, contactInfo } = req.body;
  
    if (!title || !description || !rent || !address || !numberOfRooms || !contactInfo) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    next();
  };
  
  export default validateListing;
  
