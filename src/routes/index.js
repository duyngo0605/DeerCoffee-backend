const UserRouter = require("./UserRouter")
const EmployeeRouter = require("./EmployeeRouter")
const MenuItemRouter = require("./MenuItemRouter")

const routes = (app) => {
    app.use("/api/user", UserRouter);
    app.use("/api/employee", EmployeeRouter);
    app.use("/api/menu-item", MenuItemRouter);
  };
  
  module.exports = routes;