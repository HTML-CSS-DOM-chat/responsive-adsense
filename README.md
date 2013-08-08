responsive-adsense
==================

Makes Google Adsense banners actually Responsive

==================

<p>In July 2013 Adsense got finally a first step forward in RWD. Sadly, however, <b>the new solution proposed by Google
doesn't actually solve anything</b>, it's just <b>a different method to do what we are already allowed to do
with the old Adsense code</b>.</p>

<p>With the old Adsense code we used to define breakpoints with JavaScript, switching ad-slots
accordingly to the `offsetWidth` property (for example). Now we're allowed to do that with CSS, it's more confortable
for us developers, but nothing actually changes to banners' behavior.</p>

<h1>The problem</h1>
<p>What the new Adsense script does is to serve a banner that fits the container element's size
<b>on page load and on page load only</b>. Means, for example, that if you loaded a responsive page in `landscape` view,
and adsense served you a banner 468x60 accordingly to your media queries, and then you switch to `portrait`
this is what will happen:</p>

<p>Loaded a page in Landscape:</p>
![Adsense Landscape](http://i.imgur.com/LzuEYZM.png)

<p>Switched to Portrait will cause the banner to not fit the viewport:</p>
![Adsense Portrait](http://i.imgur.com/Ip8tkev.png)
