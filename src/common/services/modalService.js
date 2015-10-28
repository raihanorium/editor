// http://weblogs.asp.net/dwahlin/building-an-angularjs-modal-service

angular.module('editorComponentsModule')

    .service('ModalService', ['$uibModal', function ($uibModal) {
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            animation: false,
            templateUrl: 'app/modal-dialog.tpl.html'
        };

        var modalOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        this.showModal = function (customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        };

        this.show = function (customModalDefaults, customModalOptions) {
            //Create temp objects to work with since we're in a singleton service
            var tempModalDefaults = {};
            var tempModalOptions = {};

            //Map angular-ui modal custom defaults to modal defaults defined in service
            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

            //Map modal.html $scope custom properties to defaults defined in service
            angular.extend(tempModalOptions, modalOptions, customModalOptions);

            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $uibModalInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function () {
                        var result = {};
                        result.fileName = $scope.file_name;
                        $uibModalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            }

            var modalInstance = $uibModal.open(tempModalDefaults).result;
            return modalInstance;
        };

        this.showNewFileDialog = function () {
            var customModalDefaults = {
                templateUrl:'app/modal-dialog-new-file.tpl.html',
                size: 'sm'
            };

            var customModalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Create',
                headerText: 'New File',
                bodyText: 'Please enter a name for the file'
            };

            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        };
    }])