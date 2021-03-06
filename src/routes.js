const { Router } = require('express');
const mongoose = require('mongoose');

const OrderController = require('./controllers/OrderController')

const router = Router();
mongoose.connect('mongodb+srv://order:qwe12345@cluster0.dlbms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
})

router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:id/status', OrderController.update);

module.exports = router;