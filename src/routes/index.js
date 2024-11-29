const UserRouter = require("./UserRouter")
const EmployeeRouter = require("./EmployeeRouter")
const MenuItemRouter = require("./MenuItemRouter")
const OrderRouter = require("./OrderRouter")
const ReservationRouter = require("./ReservationRouter")
const ShiftRouter = require("./ShiftRouter")
const routes = (app) => {
    app.use("/api/user", UserRouter);
    app.use("/api/employee", EmployeeRouter);
    app.use("/api/menu-item", MenuItemRouter);
    app.use("/api/order", OrderRouter);
    app.use("/api/shift", ShiftRouter);
    app.use("/api/reservation", ReservationRouter);
  };
  
  module.exports = routes;