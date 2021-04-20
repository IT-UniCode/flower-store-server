import Basket from '../../models/basket/index.js';
import { v4 as uuidV4 } from 'uuid';

export default function (req, res) {
  const newBasket = new Basket({
    _id: uuidV4(),
    userId: req.params.id,
    price: 0,
    comment: '',
    orderDate: new Date(),
  });

  newBasket.save()
    .then(() => res.json('Basket created!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}
