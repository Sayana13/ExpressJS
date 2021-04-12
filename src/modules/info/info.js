  const names = [];

export default function info(req, res) {
  names.push(req.body.name)
  res.status(200).json(names); //we're pushing names from Postman to our array.
}