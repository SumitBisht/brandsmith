
exports.index = function(req, res){
  res.render('index', { title: 'Welcome', images: ['front.jpg', 'front1.jpg', 'front2.jpg'] });
};