const notFound = (req, res ) => res.status(404).send(`La page que vous demandez n'existe pas`)

module.exports = notFound