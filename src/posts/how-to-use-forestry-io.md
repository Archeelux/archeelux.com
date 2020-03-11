---
tags:
- post
- forestry
- cms
- 11ty
layout: layouts/base.njk
date: 2020-03-11T11:35:09Z
title: How to use forestry.io

---
I use [forestry](https://forestry.io/) and have been using it for the past couple of months as my primary CMS. Its really great, simple and free. I use it with 11ty (or eleventy) SSG.

### What is forestry? 🌲

To put it simply it is a very close to metal content management system that relies on github for your content. You can create sections (also known as front matter) to suite any kind content and because it is bare by design, you can customize it in any way you like! Oh and it is free!

### How have I used it in my projects?

I use it in my projects and a portfolio website for a friend, so it allows me to set up multiple users and give access based on their role level. So far it has been pretty simple to set it up and any issues I did have were due to my own negligence.

#### archeelux.com

This website uses a simple posts section that has the following front matter:

* title
* tags
* layout
* date

Title and date are pretty self explanatory, only difference is that default value of now is set for the date. Tags are what is used by my SSG to print content and most importantly how to print it. All my blog posts will start with a tag named "post" and this will print everything to the front page of the website. The layout is another hidden field that I used with eleventy to specify what type of layout the blog post will use (in this case it will be index.njk).

I am going to be posting about building my first freelance project soon and I will be talking more about eleventy + forestry then. But for now if you are looking for a great CMS that is free I would highly recommend forestry!