const express = require("express")

const router = new express.Router()

const salesQuotes = require('../controller/Quote/salesQuotes')
const updateSalesQuotes = require('../controller/Quote/updateQuotes')
const salesOrder = require('../controller/Order/salesOrder')
const updateSalesOrder = require('../controller/Order/updateSalesOrder')
const salesInvoice = require('../controller/Invoice/salesInvoice')
const salesReceipt = require('../controller/Receipt/salesReceipt')
const creditNote = require('../controller/Credit Note/creditNoteController')

const salesSettings = require('../controller/salesSettings')
const customerController = require('../controller/customerController')

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');


//Sales settings
router.put('/add-sales-settings',verifyToken,salesSettings.addSalesOrderSettings)

router.put('/add-creditNote-settings',verifyToken,salesSettings.updateCreditNoteSettings)



//Sales Quotes
router.post('/add-sales-quotes',verifyToken,salesQuotes.addQuotes)

router.get('/get-last-sales-quotes-prefix',verifyToken,salesQuotes.getLastQuotesPrefix)

router.get('/get-all-sales-quotes',verifyToken,salesQuotes.getAllSalesQuote)

router.get('/get-one-sales-quotes/:quoteId',verifyToken,salesQuotes.getOneSalesQuote)

router.put('/update-sales-quotes/:quoteId',verifyToken,updateSalesQuotes.updateSalesQuote)



//Sales Order
router.post('/add-sales-order',verifyToken,salesOrder.addOrder)

router.get('/get-last-sales-order-prefix',verifyToken,salesOrder.getLastOrderPrefix)

router.get('/get-all-sales-order',verifyToken,salesOrder.getAllSalesOrder)

router.get('/get-one-sales-order/:orderId',verifyToken,salesOrder.getOneSalesOrder)

router.put('/update-sales-order/:orderId',verifyToken,updateSalesOrder.updateSalesOrder) 



// Delivery Chellans
router.put('/add-deliveryChellans',verifyToken, salesSettings.addDeliveryChellans);



//Shipment
router.put('/add-shipment-address-settings',verifyToken,salesSettings.addShipmentAddressSettings)



//Sales Invoice
router.post('/sales-invoice',verifyToken,salesInvoice.addInvoice)

router.put('/sales-invoice-settings',verifyToken,salesSettings.addInvoiceSettings)

router.get('/sales-invoice-prefix',verifyToken,salesInvoice.getLastInvoicePrefix)

router.get('/invoice-journal/:invoiceId',verifyToken,salesInvoice.invoiceJournal)

router.get('/sales-invoice',verifyToken,salesInvoice.getAllSalesInvoice)

router.get('/sales-order/:invoiceId',verifyToken,salesInvoice.getOneSalesInvoice)





// customer sales History
router.get('/get-customer-sales-history/:id',verifyToken,customerController.customerSaleHistory)



//Sales receipt
router.post('/sales-receipt',verifyToken,salesReceipt.addReceipt)

router.get('/get-all-receipt',verifyToken,salesReceipt.getAllSalesReceipt)

router.get('/get-receipt/:receiptId',verifyToken,salesReceipt.getSalesReceipt)

router.get('/get-last-salesReceipt-prefix', verifyToken, salesReceipt.getLastSalesReceiptPrefix);

router.get('/receipt-journal/:receiptId',verifyToken,salesReceipt.receiptJournal)





//Credit Note
router.post('/add-creditNote', verifyToken, creditNote.addCreditNote);

router.get('/get-all-creditNote', verifyToken, creditNote.getAllCreditNote);

router.get('/get-one-creditNote/:creditId', verifyToken, creditNote.getOneCreditNote);

router.get('/get-last-creditNote-prefix', verifyToken, creditNote.getLastCreditNotePrefix);





module.exports = router