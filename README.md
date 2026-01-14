Hi lol this is just an introduction text to the repo cause I literally made it
with no idea of what I'm doing, and there's a bunch of settings that need
description.

Run the code with `pnpm dev`. Install dependencies with `pnpm i` or `npm i`, but
when you add dependencies please make sure to do it with `pnpm` because the
lockfiles may mismatch if we both use different package managers.

# Evaluation Part: Notes

- There's two variants of the navigation bar. Users can toggle between variants in the 'App Preferences' section in
  the profile page. Measurables:
    - Rating looks (theme dependent or independent)
    - Rating convenience and ease of use
    - Time taken to complete a certain action through each navigation variant. We will get continuous numeric data
      from this (as opposed to discrete data from the ratings). We can then conduct a hypothesis test to check if
      one of the variants is actually better than the other.
- There's dark and light mode in the app. Measurables:
    - Rating looks wrt theme (x/10 for dark mode, x/10 for light mode). We can then plot this data on a histogram
      or a box plot.

# Folder structure

## App folder

This contains all the code for the pages in the app. So far it's just the home
page. Routing is pretty easy though, when you make a file named `page.tsx` it
becomes the default for that route (`app/` being the root of course)

So for example if you have a file `page.tsx` in the `app/about/` folder, it will
be served at `/about`. There's a bunch of other filenames like `not-found.tsx`
but we won't worry about that for now lol

This is by far the best advantage using nextjs has to react, cause page routing
in React is a mess. And tailwind integration but that's further down in this
page

# Components folder

Kinda like the components section in our figma page. It's just a folder where
you would dump all your components. I like to do them in separate folders
organised by page, and each component in its separate file.

# db folder

This is where we'll put our data (if we need to mock a database) just in the
form of a TS array, nothing too complicated

# public folder

Images, fonts, and the like. Stuff here does not get refetched on every refresh,
so it's memory efficient to place images here

# utils folder

Helper functions that can be used across the app. For example date formatting
functions, etc. These are not really components that you see on the screen but
just functions, so they deserve a separate folder

# TailwindCSS

You almost never need to write styles in CSS, there's a class for everything
lol. It makes styling webpages very easy but there's a but of a
documentation-looking-up curve to it

# Prettier

There's a prettier config in here so our code looks nice and uniform. If you
have autosave formatting enabled, it should detect this file and do the
formatting automatically but if not, just run `pnpm format` before any commit
and/or push.

# Stuff specific to our repo

I have downloaded the fonts we used in our figma designs and set the CSS
variables up too. If you want to use the Satoshi font (used in titles), the
class name is `"font-title"` and it's `"font-body"` for the Instrument Sans font
