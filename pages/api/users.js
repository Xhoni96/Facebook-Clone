// exports.getAll = (Model) => async (req, res, next) => {
// 	// to allow nested GET reviews on tour
// 	// filter serves in case we ask for a specific review belonging to a tour
// 	// const filter = {};
// 	// if (req.params.tourId) filter.tour = req.params.tourId;
// 	// const features = new APIFeatures(Model.find(filter), req.query)
// 	// 	.filter()
// 	// 	.sort()
// 	// 	.limitFields()
// 	// 	.paginate(); /* .populate("tour user"); */ // another way to populate 2 doc at the same time
// 	// // const doc = await features.query.explain();
// 	// const doc = await features.query;

// 	res.status(200).json({
// 		status: "success",
// 		// results: doc.length,
// 		data: "Hola",
// 	});
// };
export default (req, res) => {
	// res.status(200).json({ name: "John Doe" });
	res.status(200).json({
		status: "success",
		// results: doc.length,
		data: "Hola",
	});
};
