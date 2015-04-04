# A very simple [Backbone.js!](http://backbonejs.org/) Project with [Require.js!](http://requirejs.org/)#


## Synopsis
This will launch a series of pages that are controlled by /json/nav.json with a navigation of bootstrap style

The structure of the file will control the look of the Navigation, and the name of each node will determine which template to use.
The template that will displayed on the page will determined by the name of each link.
For eg. if the name of the link is "Home", the template will by located in js/templates/dynamicTemplates/homeTemplate.html

<small>Currently only two levels of nav dropdowns are supported.</small>


## Code Example
```
{
   "brand": "Diego Test",
   "navItems": [
      {
         "title": "Navbar Docs",
         "name": "navbar-docs"
      },
      {
         "title": "Dropdown Docs",
         "name": "dropdown-doc"
      },
      {
         "title": "Alert",
         "navItems": [
            {
               "title": "Alert Examples",
               "name": "alert-example"
            },
            {
               "title": "Alert Events",
               "name": "alert-event"
            }
         ]
      }
   ],
   "navItemsRight": [
      {
         "title": "Collapse Docs",
         "name": "collapse-doc"
      }
   ]
}
```

## Motivation
Just want to try some of the new JavaScript things

## Installation
Make sure npm and bower are installed. <br>
To use: run
```
npm start
```
and this will start a server on http://localhost:8000/apps/index.html
