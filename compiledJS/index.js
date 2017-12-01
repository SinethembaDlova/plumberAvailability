"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var signUp_1 = require("./routes/signUp");
var server = new server_1.Server();
var userAccount = new signUp_1.UserAccount();
server.app.get('/signup', userAccount.signup);
//# sourceMappingURL=index.js.map