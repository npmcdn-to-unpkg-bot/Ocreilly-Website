'use strict';

let fs = require('fs');
let Handlebars = require('handlebars');

let html = fs.readFileSync('index.hbs', 'utf8');
let template = Handlebars.compile(html);

let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
let result = template(config);

fs.writeFileSync('index.html', result, 'utf8');
