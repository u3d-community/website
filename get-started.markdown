---
layout: page
title: Get Started
permalink: /get-started
---

## Building on Linux

Let's first clone the repository into a folder of your preference. I'll use `~/Projects`, but you can use whatever you want.

    $ git clone git@github.com:u3d-community/U3D.git
    $ cd U3D

Then, let's generate the Xcode project using CMake.

    $ cmake -S . -B build

Once the project is generated, we are ready to build:

    $ cmake --build build

## Building on macOS

Let's first clone the repository into a folder of your preference. I'll use `~/Projects`, but you can use whatever you want.

    $ git clone git@github.com:u3d-community/U3D.git
    $ cd U3D

For the next step, we will need CMake. CMake is an open source tool that allows us to automate the U3D build in a cross-platform way.
You can install it using [Homebrew](https://brew.sh).

    $ brew install cmake

Then, let's generate the Xcode project using CMake.

    $ cmake -S . -B build -G Xcode

Once the project is generated, we are ready to build:

    $ cmake --build build
