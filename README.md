# My first Rails App

Learning to work with React in a Rails environment

[This tutorial](http://railsapps.github.io/installrubyonrails-mac.html) was quite helpful.

## Setup
- Install RVM, then restart terminal

`\curl -L https://get.rvm.io | bash -s stable`
- Install Ruby

`rvm use ruby --install --default`
- Install Rails

`gem install rails --no-ri --no-rdoc`

## Generate a project
- create a new project directory

`mkdir my_project`

`cd my_project`

- generate the project files
	- if you need a specific version of rails or ruby, you can set up a specific environment using RVM. For more details see [RVM docs](https://rvm.io/gemsets/basics)

`rails new .`

- serve the project and check it out

`rails server`
