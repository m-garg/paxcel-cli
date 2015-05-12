#!/usr/bin/env node
var program = require('commander');
var exec = require('child_process').exec;
var child_process = require('child_process');
var spawn = require('child_process').spawn;

program
  .version('1.0.0')
  .option('-a, --add', 'Add')	;	//flags
  
program
  .command('hi')
  .description('say hi')
  .action(function(){
        console.log('Hi my Friend!!!');
});

program
  .command('bye [name]')
  .description('say bye')
  .action(function(name){
        console.log('Bye ' + name + '. It was good to see you!');
});


program
  .command('gen')
  .description('list directories')
  .action(function(env){
	  //console.log(env);
	child_process.execSync('yo paxcel'); 


});

program
  .command('*')
  .action(function(env){
    console.log(env+' is not recognised as boxupp command. Enter a Valid command');
	exec('paxcel --help', function (error, stdout, stderr) {
	console.log(stdout);
});
});

program.parse(process.argv);