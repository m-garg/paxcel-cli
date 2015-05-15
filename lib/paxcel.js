#!/usr/bin/env node
var program = require('commander');
var execSync = require('child_process').execSync;
var exec = require('child_process').exec;
var paxcel = require('paxcel-jekyll');
var yeoman = require('yeoman-generator');

var inquirer = require("inquirer");
var fs = require('fs');
var path = require('path');
var memFs = require('mem-fs');
var editor = require('mem-fs-editor');
var ejs = require('ejs');
var stream = require('stream');
var cname;

program
  .version('1.0.0')
  .option('-a, --add', 'Add')	;	//flags

program
  .command('run')
  .description('create paxcel site')
  .action(function(env){
	//execSync('yo paxcel', { stdio: 'inherit' }); 
});

program
  .command('input')
  .description('temporary')
  .action(function(env){
    var prompts = [{
      name: "projectName",
      message: "What is the name of your project?"
    }, {
      name: "projectDescription",
      message: "Describe your project for me:"
    }, {
      name: "projectTagline",
      message: "What is the tag line for your project?"
    },{
		name: "projectKeywords",
		message: "Give the keywords related to your website"
	},{
		name: "cname",
		message : "If you want to use custom domain for this website, enter it ",
		default:""
	}];
	inquirer.prompt(prompts, function( answers ) {
      this.projectName        = answers.projectName;
      this.projectDescription = answers.projectDescription;
      this.projectTagline     = answers.projectTagline;
	    this.projectKeywords    = answers.projectKeywords;
      cname			        = answers.cname;
});
  
});
program
  .command('copy')
  .description('test')
  .action(function(env){
    //path.join(path.dirname(this.resolved), 'templates')
    
    var source = "D:\\Workspace\\paxcel-node-new\\lib\\templates\\cname";

    var destination = process.cwd()+"\\cname";
 //   var store = memFs.create();
   // var fs = editor.create(store);

console.log(source+" -> "+destination);
   // fs.copy(source,destination);
   var obj = {'cname': 'manishgarg.com' };
   var rendered ;
    ejs.renderFile(source,obj,function(err,result){
          rendered = result;
    });
    
    console.log("rendered"+rendered);
var s = new stream.Readable();

s.push(rendered);
s.push(null);

    /*var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    console.log(err);
  });*/
  var wr = fs.createWriteStream(destination);
  wr.on("error", function(err) {
    console.log(err);
  });
  wr.on("close", function(ex) {
    console.log("done");
  });
  s.pipe(wr);

});
program
  .command('check1')
  .description('test')
  .action(function(env){
//console.log(paxcel);
paxcel.Base.prompt2();
  });
program
  .command('check2')
  .description('test')
  .action(function(env){
console.log(yeoman.Base.extend.toString());
});
program
  .command('gen')
  .description('test')
  .action(function(env){
    
paxcel.Base.prompt();
});

program
  .command('input')
  .description('temporary')
  .action(function(env){
    var prompts = [{
      name: "projectName",
      message: "What is the name of your project?"
    }, {
      name: "projectDescription",
      message: "Describe your project for me:"
    }, {
      name: "projectTagline",
      message: "What is the tag line for your project?"
    },{
		name: "projectKeywords",
		message: "Give the keywords related to your website"
	},{
		name: "cname",
		message : "If you want to use custom domain for this website, enter it ",
		default:""
	}];
	inquirer.prompt(prompts, function( answers ) {
      this.projectName        = answers.projectName;
      this.projectDescription = answers.projectDescription;
      this.projectTagline     = answers.projectTagline;
	    this.projectKeywords    = answers.projectKeywords;
      cname			        = answers.cname;
});
  
});
program
  .command('copy')
  .description('test')
  .action(function(env){
    //path.join(path.dirname(this.resolved), 'templates')
    
    var source = "D:\\Workspace\\paxcel-node-new\\lib\\templates\\cname";

    var destination = process.cwd()+"\\cname";
 //   var store = memFs.create();
   // var fs = editor.create(store);

console.log(source+" -> "+destination);
   // fs.copy(source,destination);
   var obj = {'cname': 'manishgarg.com' };
   var rendered ;
    ejs.renderFile(source,obj,function(err,result){
          rendered = result;
    });
    
    console.log("rendered"+rendered);
var s = new stream.Readable();

s.push(rendered);
s.push(null);

    /*var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    console.log(err);
  });*/
  var wr = fs.createWriteStream(destination);
  wr.on("error", function(err) {
    console.log(err);
  });
  wr.on("close", function(ex) {
    console.log("done");
  });
  s.pipe(wr);

});
program
  .command('check1')
  .description('test')
  .action(function(env){
//console.log(paxcel);
paxcel.Base.prompt2();
  });
program
  .command('check2')
  .description('test')
  .action(function(env){
console.log(yeoman.Base.extend.toString());
});
program
  .command('check3')
  .description('test')
  .action(function(env){
    
paxcel.Base.copy();
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
