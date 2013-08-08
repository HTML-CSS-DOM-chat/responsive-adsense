responsive-adsense
==================

Makes Google Adsense banners actually Responsive

==================

In July 2013 Adsense got finally a first step forward in RWD. Sadly, however, the new solution proposed by Google
doesn't actually solve anything, it's just a different method to do what we are already allowed to do with the old
Adsense code.

With the old Adsense code we used to define breakpoints with JavaScript, switching ad-slots
accordingly to the `offsetWidth` property (for example). Now we're allowed to do that with CSS, it's more confortable
for us developers, but nothing actually changes to banners' behavior.

<h1>The problem</h1>
What the new Adsense script does is to serve a banner that fits the container element's size
on page load and on page load only. Means, for example, that if you loaded a responsive page in `landscape` view,
and adsense served you a banner 468x60 accordingly to your media queries, and then you switch to `portrait`
this is what will happen:

![Adsense Landscape](http://i.imgur.com/LzuEYZM.png)

![Adsense Portrait](http://i.imgur.com/Ip8tkev.png)
