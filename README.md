# HPSTR Pelican Theme

This is an copy and port to [Pelican](https://github.com/getpelican/pelican) static site generator of the [HPSTR Theme](https://github.com/mmistakes/hpstr-jekyll-theme)
All credits for that beautiful theme go to [Michael Rose](https://github.com/mmistakes)


## What HPSTR brings to the table:

* Responsive templates for post, page, and post index. Looks great on mobile, tablet, and desktop devices.
* Gracefully degrades in older browsers. Compatible with Internet Explorer 8+ and all modern browsers.
* Modern and minimal design.
* Sweet animated menu.
* Readable typography to make your words shine.
* Support for large images to call out your favorite posts.
* Social Sharing links for Facebook, Twitter, and Google+ if you choose to enable.


## Supported plugins

Pelican blogging system comes with additional plugins that you can install and activate for your website. For more information see the [pelican-plugins](https://github.com/getpelican/pelican-plugins) repository.

Here are the plugins that should work out of the box with that theme if enabled:

* [related posts](https://github.com/getpelican/pelican-plugins/tree/master/related_posts)

    Displays related articles at the bottom of a blog post being read.

* [i18n subsites](https://github.com/getpelican/pelican-plugins/tree/master/i18n_subsites)

    Extends the translations functionality by creating internationalized sub-sites for the default site. Also takes care of translating theme items.

  
## Setup for you pelican website

1. Clone this theme into your pelican's site theme directory
2. Update your site ```pelicanconf.py``` configuration file

``` python
#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals

# User info
AUTHOR = u'Your name'
AUTHOR_ABOUT = u'Your bio goes here. It shouldn't be super long but a good two sentences or two should suffice.'

SITENAME = u'Site Title'
SITEURL = ''

# Directories configuration
PATH = 'content'
ARTICLE_DIR = 'posts'

# Any extra files should be added here
STATIC_PATHS = [
    'extra',
    'images'
]

EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'}
}

# By default we enable pretty highlighing in markdown:
MD_EXTENSIONS = ['codehilite(css_class=highlight)', 'extra', 'toc']

# Pagination
DEFAULT_PAGINATION = 3

# Categories
USE_FOLDER_AS_CATEGORY = False
DEFAULT_CATEGORY = 'Misc'

# Plugin path
PLUGIN_PATH = '../pelican-plugins'
PLUGINS = ['related_posts', 'sitemap', 'i18n_subsites']

# Theme
THEME = "theme/pelican-hpstr"


# Social widgets
SOCIAL = (('github', 'https://github.com/yourname', 'GitHub'),
          ('twitter', 'http://twitter.com/yourname'),
          ('linkedin', 'http://fr.linkedin.com/in/yourname', 'LinkedIn'),)
          
# Sitemap configuration
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'weekly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

# I18n
I18N_TEMPLATES_LANG = 'en'

```


## Questions / Requests ?

Having a problem getting something to work, have some questions or want an addition to this theme ?
Ping me on Twitter [@jonathan_dray](http://twitter.com/jonathan_dray) or [file a GitHub Issue](https://github.com/spiroid/pelican-hpstr/issues/new).


## License

As the original theme is licensed under the [GNU General Public License](https://github.com/mmistakes/hpstr-jekyll-theme/blob/master/LICENSE), i choose to distribute the Pelican version
under the same conditions.
This theme is free and open source software, distributed under the [GNU General Public License](https://github.com/spiroid/pelican-hpstr/blob/master/LICENSE) version 2 or later. So feel free to to modify this theme to suit your needs.
