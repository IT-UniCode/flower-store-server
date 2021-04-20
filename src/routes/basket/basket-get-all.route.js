import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.find()
    .then(user => res.json(user))
    .catch(error => res.status(400).json(`Error ${error}`))

}
