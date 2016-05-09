import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './foo.html';

 
class Foo {}
 
const name = 'foo';
 
// create a module
export default angular.module(name, [
angularMeteor
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Foo
});