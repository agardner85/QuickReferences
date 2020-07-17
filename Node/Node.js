//node.js notes


/* ---------------------------- */
/* ----- Install node.js ------ */
/* ---------------------------- */


	/* Go to https://nodejs.org/en/ */

	/* download the latest 'even' numbered LTS version */

	/* let the node.js installer run */

	/* allow for the additional programs to install now for ease of compiling */


/* --------------------------------- */
/* ----- node.js version test ------ */
/* --------------------------------- */


	/* open terminal or cmd */

	/* type in 'node -v' to display the version of node.js installed */


/* --------------------------------- */
/* ----- comandline shortcuts ------ */
/* --------------------------------- */


	/* Listing all files/directries in the current location */

	- Terminal = 'ls'
	- cmd = 'dir'

	/* moving to a new location */

	- cd 'enter directory name' /*  - case sensative. */

	/* going backwards */

	- cd ..


/* ------------------------------------ */
/* -------------- REPL ---------------- */
/* ------------------------------------ */

	/*
	- node
	- .exit - to exit REPL
	- tab (maybe double tab)  - will show construtor list

	- ctrl c - end program
	*/


	/* This will allow you to write JS for us */

	/*
	- const name ='Bob'
	- name (on a new line) will return 'Bob'
	*/


	/* use the previus result with _ (underscore) */

	/*
	- const name = 'Andrew'
	- name (Andrew)
	-  _ + ' is 35' (Andrew is 35)
	- 'the book says ' + _ (the book says Andrew is 35)
	*/


	/* To use a constructor */

	/*
	- press tab (or double tab) to see avalable contsutors
	- type out the constructor you want to use 
	- String.
	- Press tab (or double tab) again to see what you can do with this constructor.
	- String.length
	*/


/* ------------------------------------ */
/* ----------- Functions -------------- */
/* ------------------------------------ */

	/* Require a variable be set */
	- const fs = require('fs');


/* ------------------------------------------------------- */
/* ----------- Read File and set to variable ------------- */
/* ------------------------------------------------------- */


	/* require that a variable exsists */
	const fs = require('fs');

	/* set the variable to use the file sync function to find a file with in the project */
	const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
	console.log(textIn);


/* ------------------------------------------------------- */
/* ----------- Create File with information -------------- */
/* ------------------------------------------------------- */
	

	/* create a variable that is the information to be written to the file */
	const textOut = `this is what we know about the green things: ${textIn}.\nCreated on ${Date.now()}`;
	
	fs.writeFileSync('./starter/txt/output.txt', textOut);

	console.log('File written!');


/* ------------------------------------------------------------ */
/* ----------- Synchronous Script = blocking code ------------- */
/* ------------------------------------------------------------ */


	/* This will complete the code line by line in order, one after the other */
	/* This also means that users will be forced to wait for a response until the prevus user has completed their task */

	const fs = require('fs');

	const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
	console.log(textIn);


/* ----------------------------------------------------------------------------- */
/* ----------- Asynchronous Script = non-blocking code - Call back ------------- */
/* ----------------------------------------------------------------------------- */


	/* This allows you to move aspects of the code to the 'background' to let other code continue with out delying other code */

	const fs = require('fs');

	// Non-Blocking, asynchronous

	// read file with out 'sync'
	fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
	    //if anything is wrong... like the file does not exsist, throw an error
	    if (err) return console.log('something broke in step 1');
	    // if nothing is wrong, set the data in the file to the variable data1
	    console.log('Step 1 done')
	    console.log('data1 = '+data1);
	    // use the data from data1 as a variable to call the next file and set the new files data as a variable
	    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
	        console.log('Step 2 done')
	        console.log('data2 = '+data2);
	        // use the data from data1 as a variable to call the next file and set the new files data as a variable
	        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
	            console.log('Step 3 done')
	            console.log('data3 = '+data3);
	            // create a new file and use the data from the variables data2 and data3 to populate the new file.
	            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
	                console.log('File "final.txt" written with data2 + data3 combined');
	            });
	        });
	    });
	});
	// this message will write 'first' even though it is 'last' in the order of things becouse the tasks above it are still computing and did not wait to finish.
	console.log('Reading file...')


/* ------------------------------------- */
/* ----------- Web Server -------------- */
/* ------------------------------------- */


	const fs = require('fs');
	const http = require('http');

	// req = request | res = response
	const server = http.createServer((req, res) => {
	    // ever time there is a response from the server, do the following... in this case write a message
	    console.log(req);
	    // will only display sothing in terminal when you refresh the page... thus starting / starting the request
	    res.end('Hello from the server');
	});

	// listen for port and environemnt | 127.0.0.1 is usualy local host
	// once running you can visit the site/web server by opening a browser and going to 127.0.0.1:8000
	server.listen(8000, '127.0.0.1', () => {
	    console.log('Now listening on port 8000 in local host')
	});


/* ------------------------------------- */
/* -------------- Routing -------------- */
/* ------------------------------------- */


	const fs = require('fs');
	const http = require('http');
	const url = require('url');

	// req = request | res = response
	const server = http.createServer((req, res) => {
	    // ever time there is a response from the server, do the following... in this case write a message
	    // will only display sothing in terminal when you refresh the page... thus starting / starting the request
	    //console.log(req.url);
	    const pathName = req.url;

	    // if pathname = one of these guys, then form a response
	    if (pathName === '/' || pathName === '/overview') {
	        res.end('Now viewing the overview page');
	    }
	    else if (pathName === '/product') {
	        res.end('Now viewing the product page');
	    }
	    else if (pathName === '/api') {
	        fs.readFile(`${__dirname}/starter/dev-data/data.json`, 'utf-8', (err, data) => {
	            const productData = JSON.parse(data)
	            //console.log(productData)
	            res.writeHead(200, {
	                'Content-type': 'application/json',
	                'Page-type': 'product payload'
	            });
	            res.end(data);
	        })
	    }
	    else {
	        // you can make your own header entires - 'page type is our own entry'
	        res.writeHead(404, {
	            'Content-type': 'text/html',
	            'Page-type': 'page not found'
	        });
	        res.end('<h1>This is the 404 page</h1>');
	    }

	    
	});

	// listen for port and environemnt | 127.0.0.1 is usualy local host
	// once running you can visit the site/web server by opening a browser and going to 127.0.0.1:8000
	server.listen(8000, '127.0.0.1', () => {
	    console.log('Now listening on port 8000 in local host')
	});


/* --------------------------------- */
/* -------------- API -------------- */
/* --------------------------------- */


	const fs = require('fs');
	const http = require('http');
	const url = require('url');

	// everything outside of the server request is ran once and stored for use over and over again without havg to request it every time the pge is called.
	// this is blocking code, but only ran once at the start of the program.
	const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
	const dataObj = JSON.parse(data)

	// everything below is what is ran and re-ran everytime the pge is ran/requested
	// this is non-blocking code, and ran for every request (page load)
	// req = request | res = response
	const server = http.createServer((req, res) => {
	    // ever time there is a response from the server, do the following... in this case write a message
	    // will only display sothing in terminal when you refresh the page... thus starting / starting the request
	    //console.log(req.url);
	    const pathName = req.url;

	    if (pathName === '/' || pathName === '/overview') {
	        res.end('Now viewing the overview page');
	    }
	    else if (pathName === '/product') {
	        res.end('Now viewing the product page');
	    }
	    else if (pathName === '/api') {
	        res.writeHead(200, {
	            'Content-type': 'application/json',
	            'Page-type': 'product payload'
	        });
	        res.end(data);
	    }
	    else {
	        // you can make your own header entires - 'page type is our own entry'
	        res.writeHead(404, {
	            'Content-type': 'text/html',
	            'Page-type': 'page not found'
	        });
	        res.end('<h1>This is the 404 page</h1>');
	    }

	    
	});

	// listen for port and environemnt | 127.0.0.1 is usualy local host
	// once running you can visit the site/web server by opening a browser and going to 127.0.0.1:8000
	server.listen(8000, '127.0.0.1', () => {
	    console.log('Now listening on port 8000 in local host')
	});



/* ----------------------------------------------------------- */
/* - assigning templates and replacing variables with values - */
/* ----------------------------------------------------------- */


	const fs = require('fs');
	const http = require('http');
	const url = require('url');

	// call the template and load them into memmory
	const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
	const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
	const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');

	const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
	const dataObj = JSON.parse(data);


	// Function that rolls through the page and replaces the variables {%var%} with their values from the json
	const replaceTemplate = (temp, product) => {
	    // set the page as a variable and replace each var with a value
	    let output = temp.replace(/{%NAME%}/g, product.productName);
	    output = output.replace(/{%IMAGE%}/g, product.image);
	    output = output.replace(/{%PRICE%}/g, product.price);
	    output = output.replace(/{%FROM%}/g, product.from);
	    output = output.replace(/{%NUET%}/g, product.price);
	    output = output.replace(/{%QTY%}/g, product.quantity);
	    output = output.replace(/{%DESC%}/g, product.description);
	    output = output.replace(/{%ID%}/g, product.id);
	    // boolean statment to see if the value of true/false
	    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
	    // after the manipulation is done, reset the variable to the new value.
	    return output;
	}


	const server = http.createServer((req, res) => {
	    const pathName = req.url;

	    if (pathName === '/' || pathName === '/overview') {
	        res.writeHead(200, {
	            'Content-type': 'text/html',
	            'Page-type': 'product grid page'
	        });

	        // set the value of the function to a variable
	        // .join() converts the object to a string
	        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
	        // rolls through the template html and replaces the variable with the value
	        const output = tempOverview.replace('{%PRODUT_CARDS%}', cardsHtml)

	        // prints out the value on the page.
	        res.end(output);
	    }
	    else if (pathName === '/product') {
	        res.end('Now viewing the product page');
	    }
	    else if (pathName === '/api') {
	        res.writeHead(200, {
	            'Content-type': 'application/json',
	            'Page-type': 'product payload'
	        });
	        res.end(data);
	    }
	    else {
	        res.writeHead(404, {
	            'Content-type': 'text/html',
	            'Page-type': 'page not found'
	        });
	        res.end('<h1>This is the 404 page</h1>');
	    }
	});

	server.listen(8000, '127.0.0.1', () => {
	    console.log('Now listening on port 8000 in local host');
	});
