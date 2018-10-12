'use strict';

require('shelljs/global');
const fs = require('fs');
const os = require('os');
const path = require('path');

const platform = os.platform();
const aapt = path.join(__dirname, 'bin', platform , 'aapt');

if (platform === 'linux') {
	fs.chmodSync(aapt, '777')	
}

function promistify(cmd, callback) {
	callback = callback || function () {};
	return new Promise((resolve, reject) => {
		exec(cmd, (code, stdout, stderr) => {
      if (code !== 0) {
        reject(stderr);
        callback(stderr, null);
      } else {
      	resolve(stdout);
      	callback(null, stdout);
      }
		})
	});
}

function list(apkfilePath, callback) {
	return promistify(`${aapt} l ${apkfilePath}`, callback);
}

function dump(what, apkfilePath, callback) {
	return promistify(`${aapt} d ${what} ${apkfilePath}`, callback);
}

function packageCmd(command, callback) {
	return promistify(`${aapt} p ${command}`, callback);
}

function remove(apkfilePath, files, callback) {
	if (!Array.isArray(files)) {
		files = [files]
	}
	const removeFiles = files.join(' ')
	return promistify(`${aapt} r ${apkfilePath} ${removeFiles}`, callback);
}

function add(apkfilePath, files, callback) {
	if (!Array.isArray(files)) {
		files = [files]
	}
	const addFiles = files.join(' ')
	return promistify(`${aapt} a ${apkfilePath} ${addFiles}`, callback);
}

function crunch(resource, outputFolder, callback) {
	if (!Array.isArray(resource)) {
		resource = [resource]
	}
	const resourceSources = resource.join(' ')
	return promistify(`${aapt} c -S ${resourceSources} -C ${outputFolder}`, callback);
}

function singleCrunch(inputFile, outputfile, callback) {
	return promistify(`${aapt} s -i ${inputFile} -o ${outputfile}`, callback);
}

function version(callback) {
	return promistify(`${aapt} v`, callback);
}

module.exports = {
	list: list,
	dump: dump,
	packageCmd: packageCmd,
	remove: remove,
	add: add,
	crunch: crunch,
	singleCrunch: singleCrunch,
	version: version
}
