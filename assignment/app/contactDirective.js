var contactModule = angular.module("contactModule",[]);

contactModule.directive('contactNumber', function () {
      
    var controller = ['$scope', function ($scope) {

			$scope.phNumber = {code:"+",number:""};
			$scope.regexCode = '\\+[0-9]+';
			$scope.regexNumber = '\[0-9]+';
      }],
        
      template = '<form name="contactNumber">'+
		  '<label>'+
		    'Code:<input type="text" name="code" ng-model="phNumber.code" ng-pattern="regexCode" ng-maxlength="5" required />'+
		  '</label>'+
		  '<div ng-show="contactNumber.code.$touched || contactNumber.code.$dirty" ng-messages="contactNumber.code.$error" 				style="color:maroon" role="alert">'+
		  '<div ng-message="required">You did not enter a field</div>'+
		  '<div ng-message="pattern">Invalid input(Only numbers are allowed.)</div>'+
		  '<div ng-message="maxlength">Invalid code (Code should not > 4)</div>'+
		  '</div>'+
		  '<label>'+
		  'Phone Number:<input type="text" name="phnumber" ng-model="phNumber.number" ng-pattern="regexNumber" ng-maxlength="10" required />'+
		  '</label>'+
		  '<div ng-show="contactNumber.phnumber.$touched || contactNumber.phnumber.$dirty" ng-messages="contactNumber.phnumber.$error"' +
		  'style="color:maroon" role="alert">'+
		  '<div ng-message="required">You did not enter a field</div>'+
		  '<div ng-message="pattern">Invalid input(Only numbers starting with + are allowed.)</div>'+
		  '<div ng-message="maxlength">Invalid code (Code should not > 10)</div>'+
		  '</div>'+
		  '<h1 ng-if="contactNumber.phnumber.$valid && contactNumber.code.$valid">'+
		  '{{"Your number: "+phNumber.code.substring(1,phNumber.code.length)+phNumber.number+" is valid."}}'+
		  '</h1>'+
		  '</form>';
      
      return {
          restrict: 'E', //Default in 1.3+
          controller: controller,
          template: template
      };
  });
