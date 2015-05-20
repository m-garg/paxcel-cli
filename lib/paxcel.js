#!/usr/bin/env node
var program = require('commander');
var execSync = require('child_process').execSync;
var exec = require('child_process').exec;
var paxcel = require('paxcel-jekyll');
var chalk = require('chalk');

program
  .version('1.0.0')
  .option('-a, --add', 'Add')	;	//flags

program
  .command('create <type>')
  .description('test')
  .action(function(type){
    paxcel.base.create(type);
});

program
  .command('add <type>')
  .description('test')
  .action(function(type){
    switch(type){
      case 'page':
                  break;
      case 'post':
                  break;
      case 'layout':
                  break;
      case 'team' : 
                  paxcel.base.prompt.addTeamMember();
                  break;
      case 'default' :
                  console.log(chalk.red("invalid arguments.")); 
    }
});

program
  .command('delete <type>')
  .description('test')
  .action(function(type){
    switch(type){
      case 'page':
                  break;
      case 'post':
                  break;
      case 'layout':
                  break;
      case 'team' : 
                  break;
      case 'default' :
                  console.log(chalk.red("invalid arguments.")); 
    }
});

program
  .command('update <type>')
  .description('test')
  .action(function(type){
    switch(type){
      case 'page':
                  break;
      case 'post':
                  break;
      case 'layout':
                  break;
      case 'team' : 
                  paxcel.base.prompt.updateTeamMember();
                  break;
      case 'default' :
                  console.log(chalk.red("invalid arguments.")); 
    }
});

program
  .command('check <ss>')
  .description('test')
  .action(function(z,env){
});

program
  .command('*')
  .action(function(env){
	console.log(env+' is not recognised as paxcel command. Enter a Valid command');
	exec('paxcel --help', function (error, stdout, stderr) {
	console.log(stdout);
});
});

program.parse(process.argv);
