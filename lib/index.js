'use strict';

Jupyter.utils.load_extensions(['jupyter-lightsaber/index']).then(function (plugins) {
	plugins[0].changeSaberStyle('yoda');
});