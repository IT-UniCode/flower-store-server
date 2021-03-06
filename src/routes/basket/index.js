import { Router } from "express";

import getBasketById from "./basket-get-by-id.route.js";
import getBasketByUserId from "./basket-get-by-userId.route.js";
import getBasketList from "./basket-get-all.route.js";
import getAdminBasketList from "./basket-get-to-admin.route.js";
import createBasket from "./basket-create-new.route.js";
import updateGoodsOnBasket from "./basket-update-goods.route.js";
import deleteAllBasket from "./basket-del-all.route.js";
import deleteOneGoodsFromBasket from "./basket-del-one-goods.route.js";
import deleteBasketById from "./basket-del-by-id.route.js";
import confirmBasket from "./basket-confirm.route.js";
import updateBasketStatus from './basket-update-status.route.js';

const router = Router();

router.route("/").get((req, res) => {
  getBasketList(req, res);
});

router.route("/get-to-admin").get((req, res) => {
  getAdminBasketList(req, res);
});

router.route("/:id").get((req, res) => {
  getBasketById(req, res);
});

router.route("/user/:id").get((req, res) => {
  getBasketByUserId(req, res);
});

router.route("/create/:id").post((req, res) => {
  createBasket(req, res);
});

router.route("/confirm/:id").post((req, res) => {
  confirmBasket(req, res);
});

router.route("/update-goods/:id").patch((req, res) => {
  updateGoodsOnBasket(req, res);
});

router.route("/update-status").patch((req, res) => {
  updateBasketStatus(req, res);
});

router.route("/delete-goods/:id").patch((req, res) => {
  deleteOneGoodsFromBasket(req, res);
});

router.route("/del-by-id/:id").delete((req, res) => {
  deleteBasketById(req, res);
});

router.route("/delete-all").post((req, res) => {
  deleteAllBasket(req, res);
});

export default router;
