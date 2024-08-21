const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
const unitController = require("../controller/unitController")
const manufacturerController = require("../controller/manufacturerController");
const categoriesController = require("../controller/categoriesController")
const brandController = require('../controller/brandController')
const rackController = require('../controller/rackController')
const itemDropdownController = require("../controller/itemDropdownController")
const itemSettingsController = require("../controller/itemSettingsController")



// Item
router.post('/add-item', itemController.addItem);
router.get('/get-all-item', itemController.getAllItem);
router.get('/get-one-item/:id', itemController.getAItem)
router.put('/edit-item',itemController.updateItem)
router.delete('/delete-item/:id',itemController.deleteItem)


// Unit
router.post('/add-unit', unitController.addUnit);
router.put('/get-all-unit', unitController.getAllUnit);
router.get('/get-one-unit/:_id', unitController.getOneUnit);
router.put('/edit-unit', unitController.updateUnit);
router.delete('/delete-unit/:id', unitController.deleteUnit);

// Unit Conversion
// router.post('/add-unitConversion', unitController.addUnitConversion);
// router.put('/get-all-unitConversion', unitController.getAllUnitConversion);
// router.get('/get-one-unitConversion/:_id', unitController.getOneUnitConversion);
// router.put('/edit-unitConversion', unitController.updateUnitConversion);
// router.delete('/delete-unitConversion/:id', unitController.deleteUnitConversion);


//manufacturer
router.post('/add-manufacturer', manufacturerController.addManufacturer);
router.put('/get-all-manufacturer', manufacturerController.getAllManufacturer)
router.get('/get-one-manufacturer/:id',manufacturerController.getAManufacturer)
router.put('/update-manufacturer', manufacturerController.updateManufacturer)
router.delete('/delete-manufacturer/:id',manufacturerController.deletedManufacturer)


//category
router.post('/add-category', categoriesController.addCategory)
router.put('/get-all-category' , categoriesController.getAllCategories)
router.get('/get-one-category/:id' , categoriesController.getACategory)
router.put("/update-category" , categoriesController.updateCategory)
router.delete("/delete-category/:id", categoriesController.deleteCategory)


//brand
router.post('/add-brand', brandController.addBrand);
router.put('/get-all-brands', brandController.getAllBrands);
router.get('/get-one-brand/:id', brandController.getABrand);
router.put('/update-brand', brandController.updateBrand);
router.delete('/delete-brand/:id', brandController.deleteBrand);


//Rack
router.post('/add-rack', rackController.addRack);
router.put('/get-all-rack', rackController.getAllRack);
router.get('/get-one-rack/:id', rackController.getOneRack);
router.put('/update-rack', rackController.updateRacks);
router.delete('/delete-rack/:id', rackController.deleteRack);


//item dropdowm
router.put('/get-itemDropdown', itemDropdownController.getItemDropdowm);


//items settings
router.put('/add-item-settings',itemSettingsController.addItemSettings);
// router.post('/get-item-settings',itemSettings.getItemSettings);


module.exports = router