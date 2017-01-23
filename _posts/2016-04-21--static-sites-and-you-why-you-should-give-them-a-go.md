---
title: Static Sites and You -- Why You Should Give Them a Go
date: 2016-04-21 07:47:00 -04:00
categories:
tags:
- Programming
layout: post
---

I've been blogging via CMSes for years now, because what better way to write than to type, save, and it appears? One can easily manage earlier posts, edit, and create new.

From Blogger to Wordpress to Tumblr to Ghost, I've been everywhere, and enjoyed those same features. But now, I've moved on to [Hexo](https://hexo.io).

So why would you ever give that up for a tool that requires building and deploying?

### Markdown

Your posts in most static generators are written in pure Markdown, which is a plain-text markup language that allows you to apply formatting in any text editor. No need to know HTML, a few simple rules and you're on your way to formatting perfect posts.

Sure, some of the above CMSes can use Markdown as their post format--Ghost natively, and Wordpress via plugin--but that brings us to the next point...

### You Own Your Data

Once you write your post into a CMS, large amounts of that data is now strongly linked to the system you're using. When you edit your post, you get the text of it, and nothing more. Metadata such as the posting and editing dates, tags, and more are in proprietary formats, and you'd have to either manually convert it all to a new format, or use a migration tool.

In a static site, everything about a post is in the content of the post. For example, here is the metadata for this post, which simply resides at the top of the file in plain text:

```yaml
---
layout: "post"
title: "Static Sites and You -- Why You Should Give Them a Go"
date: "2016-04-21 07:47"
tags:
  - Programming
---
```

There is nothing fancy here, which is what makes it so powerful.

### Your Posts are Text

Your posts are plain text markdown files, in a folder. This is amazingly powerful. With this, you can store your entire blog in a github repo (as I do here!) and never worry about losing your data.

If you lose your entire deployed site due to some freak disk error, that's fine! You can redeploy it from the source data with ease.

Seriously, just check out the [repository for this site](https://github.com/takakoshimizu/halcyondays) and see how simplistic it all is. All of the actual post data is under `/source/_posts`.

### Your Site is Text

On top of this, the generated site is nothing but plain HTML, CSS, JS, and images. No backing instance is required--no application server, no database, nothing.

This means you can host your site anywhere that plain files can be served, including Github Pages. The tool I'm using, [Hexo](https://hexo.io), allows you to deploy to several hosts with a single command.

Or...

### You Own your Deployment Process

You can use `hexo deploy` to deploy to a supported host, or use `hexo generate` to generate the raw files to the `/public` directory, and do with them as you will.

This site is stored on Github. When a change is made to the repository, a Jenkins build server kicks off a process to build the files via `hexo generate`. This in turn creates a Docker image containing the site and a minimal nginx server, and spins it up over top of the existing image, before tearing the old one down. A separate proxy container picks up these changes and routes appropriately to requests.

This means no downtime on deploys, just like with a CMS. But this also means I know what's happening, and can change it with ease.

### Worth It

It's totally worth it, and while not quite as easy to get started as some services, definitely worth the additional control, and ease of use after the setup.

Please see [Static Gen](https://www.staticgen.com/) for a list of dozens of static site generators to find one in the language and framework of your choosing!
