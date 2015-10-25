angular.module('editorCurrentFilesModule')

	.factory('CurrentFilesService', [function() {
		// fileRepo contains all current files
		var fileRepo = {
			files: []
		};

		// returns all of the current files
		var getAll = function() {
			console.log('returning current files...');
			console.log(fileRepo.files);

			return fileRepo.files;
		}

		// adds a given file to the fileRepo
		var add = function(newFile) {
			console.log('adding file...');

			newFile.text += ' ' + new Date();
			fileRepo.files.push(newFile);

			console.log('current files...');
			console.log(fileRepo.files);
		}

		return {
			getCurrentFiles: getAll,
			addNewFile: add
		};
	}])