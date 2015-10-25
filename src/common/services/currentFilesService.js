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
			newFile.id = (fileRepo.files.length == 0)? 1: (fileRepo.files[fileRepo.files.length - 1].id + 1);
			newFile.text += ' ' + new Date();
			fileRepo.files.push(newFile);
			console.log(newFile);
		}

		// removes a file with id from the files array
		var close = function(id) {
			for (var i = fileRepo.files.length - 1; i >= 0; i--) {
				if(fileRepo.files[i].id === id){
					fileRepo.files.splice(i, 1);
				}
			};

			console.log('current files: ');
			console.log(fileRepo.files);
		}

		return {
			getCurrentFiles: getAll,
			addNewFile: add,
			closeFile: close
		};
	}])