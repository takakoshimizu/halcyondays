---
title: 'WkApi: A Simple Javascript API for WaniKani'
date: 2015-05-22 06:56:51 -04:00
permalink: wanikani-js-api
categories:
tags:
- Wanikani
- Programming
id: 54
updated: '2015-05-22 13:08:14'
---

Recently, I have begun working on open source projects to get my name out on Github. This is because all of my work is not shareable, and I'll need to have something a prospective employer can look at.

So I've started on a simple API Access layer for Javascript to access the Wanikani API with no external dependencies.

This is important to me as my next series of projects will be a Wanikani stats app in Angular, Angular2, and React. Having a standardized, central access point will let me work on the actual applications better.

This will also let other would-be web devs access the API simpler.

WkApi utilizes JSONP to make cross domain requests. It cleans up after itself as well. Caching of data is handled within the script and cached to localStorage.

Currently it is in a very early version, and only supports half the API. The localStorage support only works with one API key right now as well. Many improvements are planned.

To see the source, visit [Github](https://github.com/takakoshimizu/wanikani-api), and for a short demo, [see here](https://takakoshimizu.github.io/wanikani-api/ex.html).
