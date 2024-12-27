const UserRouter = require("./UserRouter")
const EmployeeRouter = require("./EmployeeRouter")
const MenuItemRouter = require("./MenuItemRouter")
const OrderRouter = require("./OrderRouter")
const ReservationRouter = require("./ReservationRouter")
const ShiftRouter = require("./ShiftRouter")
const ItemTypeRouter = require("./ItemTypeRouter")
const VoucherRouter = require("./VoucherRouter")
const ReportRouter = require("./ReportRouter")

const routes = (app) => {
    app.use("/api/user", UserRouter);
    app.use("/api/employee", EmployeeRouter);
    app.use("/api/menu-item", MenuItemRouter);
    app.use("/api/order", OrderRouter);
    app.use("/api/shift", ShiftRouter);
    app.use("/api/reservation", ReservationRouter);
    app.use("/api/item-type", ItemTypeRouter);
    app.use("/api/voucher", VoucherRouter);
    app.use("/api/report", ReportRouter);
  };
  
  module.exports = routes;