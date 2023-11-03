import type { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = (req, res) => {
	res.status(200).send('Hello, world!');
};
