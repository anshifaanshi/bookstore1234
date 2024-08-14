const validatebook = (req, res, next) => {
    const { title, author, publishyear } = req.body; // Corrected destructuring
    if (!title || !author || !publishyear) {
        return res.status(400).send("Title, author, and publish year are required.");
    }
    next();
};

export default validatebook;
