---
title: Hide address bar in Chrome
description: Hiding Chrome address bar for a clutter-free browsing experience.
year: 2023
date: 2023-09-04
draft: false
slug: /blog/hide-address-bar-in-chrome
tags:
  - devtools
---
This is very useful for screencasts and screenshots, or just to increase the real estate of your screen.

There is no easy way from within Chrome. You will need to go to the terminal and open a new Chrome instance in *application mode*, passing your URL.

## **OSX**
```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=URL
```

## **Windows**
```shell
Chrome.exe --app=URL
```
(Chrome folder path varies from Windows version, find your folder path **[see here](https://stackoverflow.com/questions/40674914/google-chrome-path-in-windows-10/40674915)**)

## **Linux**
```shell
google-chrome --app=URL
```

