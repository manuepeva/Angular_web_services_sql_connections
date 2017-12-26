"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployee = function () {
        return [
            { code: 'empl101', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl102', name: 'Tom', gender: 'female', annualSal: 6599 },
            { code: 'empl103', name: 'Tom', gender: 'female', annualSal: 6599 },
            { code: 'empl104', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl105', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl206', name: 'Verne', gender: 'female', annualSal: 52222 },
            { code: 'empl206', name: 'Verne', gender: 'female', annualSal: 52222 }
        ];
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Employee.service.js.map