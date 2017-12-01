"use strict";
exports.__esModule = true;
var plumberDB_1 = require(".././models/plumberDB");
var UserAccount = (function () {
    function UserAccount() {
    }
    UserAccount.prototype.signup = function (req, res) {
        var name = req.body.name;
        var passkey = req.body.passkey;
        var phoneNumber = req.body.phoneNumber;
        var userAccount = new plumberDB_1["default"]({
            plumberName: name,
            password: passkey,
            contactNumber: phoneNumber
        });
        userAccount.save()
            .then(function (user) {
            res.json({
                status: 200,
                response: 'User successfully created.',
                data: user
            });
        })["catch"](function (error) { return (console.log(error)); });
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
//# sourceMappingURL=signUp.js.map