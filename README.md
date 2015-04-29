# utilios

This repo contains JavaScript modules of project independent utility code -- logging, http client utilities,
Promise helpers, etc. This repo is intended to be included in other projects, rather than stand on its own.

## Use
After installation, the utilios package can be used in two ways.

The first way is to require the whole thing. That would look something like:  
```javascript
var utilios = require('utilios');
```
`utilios` will be an Object with a property named after each of the sub-modules.
```JavaScript
utilios.logger('sampleLogName');
utilios.logger.debug('ermahgerd');

utilios.supestAgent.get('http://exampl.com/').then(function(aResponse){});

utilios.promises.executeSerially(someTasks);
```

The other way is to require individual sub-modules:
```JAVASCRIPT
var logger = require('utilios/logger')('sampleLogName');
logger.debug('DOOD!');
```

Note: at this time there is no utilios package in the npm system. So, installation
is not as simple as `nmp install utilios`. Rather, in the target package.json manually 
declare utilios as a dependency:
```javascript
"dependencies": {
  "utilios": "https://github.com/JohnTigue/utilios.git"
  }
```

## History
'Tis a silly name, continuing the pattern from my nodeio repo. The nodeio project 
is just my explorations of node and io, ergo its name of node-io a.k.a. nodeio. Those
files are really not for direct use in any given project, rather they are for poking
and prodding the system fundamentals and basic sanity checks i.e. me learning. Once
I kick a theme around enough to where something useful comes of it, the useful bit
is migrated to utilios, while the learning process is archived in nodeio.

So, utilios is real production code. At one point, I was working on multiple repos
as the same time and caught myself wanting to link, via relative filepaths, from one
repo into another, which is extremely poor form. So, I forked the code out in
utilios. It was only a file or two at that time so I just started with a blank
repo rather than actually splitting out a sub-tree or two from the other repos; little
git history was lost.

## The sub-modules
The rest of this file provides an overview of the various modules in this repo.

### Logging
[Bunyan](https://github.com/trentm/node-bunyan) is a nice logger, a replacement for [console.log() etc](https://nodejs.org/docs/latest/api/all.html#all_console_1).
It has a healthy community with lots of "plugins" so I use it a my primary logging 
machinery. It's a bit hairy out-of-the box and to get it to behave as I desire
requires close to 20 lines of code. 

When I want to pull it into a project, I just want 1, or 2, lines of code at the maximum
in order to get it up and running. So, I bury all the details into a module. This also allows
for swapping it out via "dependency injection" i.e. in various contexts I can just
include a different module and associated bunyan config. So, before it is logging
human readable messages to the console, and then presto-changeo it is pumping the messages
onto a database, or maybe over HTTP from a browser up to a Web service awaiting log
messages, etc. Bunyan provides a lot of that. Module-izing it gives terse flexibility.

### Promises
As the result of futzed around with Promises a bunch, this repo has some utilities related to 
Promises. Firstly, [Bluebird](https://github.com/petkaantonov/bluebird) is the
Promise library to go for. On top of there is some handy utility code, for example
a function for serially executing some Promise based tasks, etc.

## More
As I go through the painful learning process and find (and/or build) more bonbons that are solid and
become part of my go-to kit, I will migrate them in here.

## Test
`mocha` or `make`





