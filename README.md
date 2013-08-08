responsive-adsense
==================

Makes Google Adsense banners actually Responsive

==================

<p>In July 2013 Adsense got finally a first step forward in RWD.
Sadly, however,<b>the new solution proposed by Google doesn't actually solve anything</b>,
it's just <b>a different method to do what we are already allowed to do
with the old Adsense code</b>.</p>

<p>With the old Adsense code we used to define breakpoints with JavaScript, switching ad-slots
accordingly to the <code>offsetWidth</code> property (for example).
Now we're allowed to do this with CSS, it's more confortable
for us developers, but nothing actually changes to banners' behavior.</p>

<h1>The problem</h1>

<p>What the new Adsense script does is to serve a banner that fits the container element's size
<b>on page load and on page load only</b>.
Means, for example, that if you loaded a responsive page in `landscape` view,
and Adsense served you a banner 468x60 accordingly to your media queries, and then you switch to `portrait`
this is what will happen:</p>

<p>Loaded a page in Landscape:</p>
![Adsense Landscape](http://i.imgur.com/LzuEYZM.png)

<p>Switched to Portrait will cause the banner to not fit the viewport:</p>
![Adsense Portrait](http://i.imgur.com/Ip8tkev.png)

<p>In fact, Adsense doesn't update the banner at all after the page load, it will leave it as is,
even if it <b>becomes totally useless</b>.</p>

<h1>The solution</h1>
<p>Today I've tried for the first time the new Adsense plugin and I got an idea:
what if I use CSS <code>transform: scale(x,y)</code> to zoom in/out the banner?
In most of cases, every banner that is visible in 16:9 will be readable in 9:16 as well
especially because of high pixel density screens that are very popular these days.</p>

<h1>Warning</h1>
<p><b>This code is probably against Google Adsense's usage policies, so I wouldn't recommend you to use it.</b>
But I'm investigating to be certain and I will fight to let Google allow this kind of modifications.</p>
<p>Firstly, I don't see any difference between the fact that users can zoom-in/zoom-out their phones and 
