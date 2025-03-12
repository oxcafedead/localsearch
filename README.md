# Localhost search proxy

Fake the search service

## Overview

Since the latest versions of Firefox do not allow you to remove the automatic search feature while typing something that is not a URL in the address bar, I've created a simple proxy that receives search HTTP requests from Firefox. It just shows them in the UI and optionally suggests searching using DuckDuckGo. Everything is manual, so there are no accidental sensitive data leaks to Google or any other search provider.

Image:

![Screenshot](demo.png)

Pre-requisites: Firefox, GNU/Linux, podman and systemd.

## Usage

First, run `./init.sh` to build and install the container with the systemd service (it uses podman, and Quadlet to generate systemd service).

As Firefox does not allow to create custom search provider in new versions, one should install a plugin, for example I use [the following one](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine).

Then, in the plugin settings, add a new search engine with the search URL `http://localhost:2314/?q=%s`.
