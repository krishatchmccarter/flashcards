const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data; //cards = cards.data

router.get("/:id", (req, res) => {
	const { side } = req.query;
	const { id } = req.params;
	const { text } = cards[id][side];
	const { hint } = cards[id];

	const { templateData } = { text, hint };

	res.render("card", {
		prompt: cards[req.params.id].question,
		hint: cards[req.params.id].hint, //using id in params because that's what we called it in url
	});
});

module.exports = router;
