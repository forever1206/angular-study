"use strict";
var testing_1 = require('@angular/core/testing');
var great_angular_component_1 = require('./great-angular.component');
describe('GreatAngularComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [great_angular_component_1.GreatAngularComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(great_angular_component_1.GreatAngularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=great-angular.component.spec.js.map