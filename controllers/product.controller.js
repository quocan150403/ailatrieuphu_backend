const unidecode = require('unidecode');
const ProductModel = require('../models/product.model');

class ProductController {
  // [GET] api/products
  async getALl(req, res, next) {
    try {
      const data = await ProductModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/products/:id
  async getOne(req, res, next) {
    try {
      const data = await ProductModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/products/store
  async create(req, res, next) {
    try {
      req.body.slug = unidecode(req.body.name)
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/-+/g, '-');
      const data = new ProductModel(req.body);
      const savedProduct = await data.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/products/update/:id
  async update(req, res, next) {
    try {
      req.body.slug = unidecode(req.body.name)
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/-+/g, '-');
      const data = await ProductModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/products/delete/:id
  async delete(req, res, next) {
    try {
      await ProductModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Xóa thành công');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
