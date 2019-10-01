#!/usr/bin/env node
var fs=require('fs');
var open = require('open');
var path = require('path');
var data = require( path.resolve( __dirname, "./contact_info.json" ) );

const [,, ...args] = process.argv

if (args[0] == undefined){
	console.log("no arguments - returning all contact info")
	console.log("use `contact-meghan` to view all contact info or `contact-meghan [website|github|linkedin]` to open site in your default browser")
	console.log(data)
} else {
	for (arg in args){
		arg_name = args[arg]
		websites = ["website", "github", "linkedin"]
		console.log(arg_name + ": " + data[arg_name])
		if (websites.indexOf(arg_name) >= 0){
			open(data[arg_name])
			console.log("Meghan's " + arg_name + " is now open in your default browser")
		}
	}
}