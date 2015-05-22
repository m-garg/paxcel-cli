#!/usr/bin/env node

var program = require('commander');
var paxcel = require('paxcel-jekyll');

program
    .version('1.0.0');

program
    .command('create ["[type]"]')
    .description('Create new website. Possible arguments: website, blog, docs. Default:website')
    .action(function(type) {
        if (!type) {
            type = "website";
        }
        paxcel.base.create(type);
    });

program
    .command('add')
    .description('Add new post,page etc.')
    .action(function() {
        paxcel.base.prompt.addPrompt();
    });

program
    .command('delete')
    .description('Delete post,page etc.')
    .action(function() {
        paxcel.base.prompt.removePrompt();
    });

program
    .command('push')
    .description('Update the Git repository with current code.')
    .action(function() {
        paxcel.base.git.pushToGithub();
    });

program
    .command('*')
    .description('')
    .action(function(env) {
        console.log(env + ' is not recognised as paxcel command. Enter a Valid command');
        program.help();
    });

program.parse(process.argv);