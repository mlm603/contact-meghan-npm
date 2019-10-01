Contact info for Meghan Maloy
Info prints to console after npm install and is also accessible through CLI using `contact-meghan` command.
`contact-meghan` will log full json object of contact info in the console.
`contact-meghan [website|github|linkedin]` will log the link of the corresponding site in the console and also open the link in the user's default browser.

To replicate:
1. Make new directory
2. npm init
3. Copy `contact_info.json` and `cli.js` files into your directory, updating name and contact info to your own
4. In `package.json`
	- add `"postinstall": "[your-CLI-command]"` under "scripts"
	- after the license, add
		```
		"bin": {
		    "[your-CLI-command]": "cli.js"
		  },
		```
4. Test in virtual environment using `npm install [/path/to/directory]`
5. npm publish
