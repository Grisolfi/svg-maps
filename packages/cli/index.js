#!/usr/bin/env node

import { createRequire } from 'module';
import { Command } from 'commander';
import { runGenerator, convertSvgToJs } from './lib/index.js';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const program = new Command();

program
	.name("svg-maps")
	.version(pkg.version, '-v, --version')

// TODO: Allow to type name of map directly ('add [map]') to skip first prompting?
program.command('add')
	.description('Create a new map package with the same format as svg-maps')
	.action(runGenerator)

program.command('generate <file.svg> [file.js]')
	.description('Generate JS file from SVG file')
	.action(convertSvgToJs)

program.parse(process.argv)
