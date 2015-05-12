#!/usr/bin/env node
var program = require('commander');
var execSync = require('child_process').execSync;
var exec = require('child_process').exec;

program
  .version('1.0.0')
  .option('-a, --add', 'Add')	;	//flags

program
  .command('run')
  .description('create paxcel site')
  .action(function(env){
	execSync('yo paxcel', { stdio: 'inherit' }); 
});
program
  .command('check')
  .description('temporary')
  .action(function(env){
	exec('git config --list', function (error, stdout, stderr) {
	/*console.log("start: "+stdout+" :end");	*/ console.log(stdout.user);

});});


program
  .command('*')
  .action(function(env){
	console.log(env+' is not recognised as paxcel command. Enter a Valid command');
	exec('paxcel --help', function (error, stdout, stderr) {
	console.log(stdout);
});
});

program.parse(process.argv);