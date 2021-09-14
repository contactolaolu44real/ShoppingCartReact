import React from 'react';
import './style.css'
export default ()=>{
  return(<div className="masonry">
  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>

  <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. We perform the following tasks with the above CSS:</div>

  <div className="item">This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.</div>
  <div className="item">Breaking cover, I’m talking about the CSS multi-column layout module. Or aka the masonry magic wand.

This module allows us to present blocks as part of virtual columns. Multi-column properties column and column-count collectively lay down the foundation of our masonry.

After that, we will also be adding gutter to our masonry with  column-gap, its another property.

Note: Gutter is the space between the masonry items.

If you are okay with HTML and CSS, this tutorial is going to be easy for you. Let’s jump into the code mess.

The column-count property
CSS column-count allows you to add a specific number of adjacent columns to any block element. The child elements inside the block get aligned as per the specified number of columns.

And this gives an effect of a masonry layout, without any involvement of JavaScript. Read more on column-count here.

What about spacing between the grid items? The column-gap property solved the gutter problem.</div>
  </div>)
}