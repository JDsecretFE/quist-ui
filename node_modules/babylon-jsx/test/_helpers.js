// eslint-disable xo/filename-case
import path from 'path';
import fs from 'mz/fs';
import globby from 'globby';
import * as babylon from 'babylon';
import babelGenerate from 'babel-generator';

export function generate(...args) {
	return babelGenerate(...args).code;
}

export function parse(code, options = {}) {
	return babylon.parse(code, {
		plugins: ['jsx'],
		sourceType: 'module',
		...options
	});
}

export async function read(fileName) {
	const filePath = path.resolve(process.cwd(), fileName);
	const buffer = await fs.readFile(filePath, 'utf-8');
	return parse(buffer.toString());
}

export function getTests() {
	const files = globby.sync(['mocks/**/actual.js']);
	return files.map(file => {
		const name = path.basename(path.dirname(file));
		const sourcePath = file;
		const expectedPath = path.resolve(path.dirname(file), 'expected.js');
		return {expectedPath, sourcePath, name};
	});
}
