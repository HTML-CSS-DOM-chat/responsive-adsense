responsive-adsense
==================

An attempt to make Google Adsense adverts truly responsive.

<img src="http://i.imgur.com/kj1k3fK.gif">

==================

In July 2013, Google released an updated version of Adsense, to support responsive adverts.

However **the new solution proposed by Google doesn't actually solve any problem**,
it just provides **a different method** to do what you are already allowed to do
with the old version of Adsense.

With the old version of Adsense you could define breakpoints with JavaScript and switch adverts
according to the <code>offsetWidth</code> property.

Now we're allowed to do this with CSS, which is more confortable, but nothing actually changes to banners' behavior.

##Problem

The new Adsense serves an advert as specified with CSS
**on page load and on page load only (exactly like the old AdSense)**.

If you loaded a page in *landscape* view, Adsense will serve, for example,
an advert `468px x 60px` accordingly to your media queries, but the following issue arises:</p>

Loaded a page in *landscape* view:
<p align="center"><img src="http://i.imgur.com/LzuEYZM.png"></p>

Rotate device to *portrait* view and the banner will not fit in the viewport:
<p align="center"><img src="http://i.imgur.com/Ip8tkev.png"></p>

The fact Adsense doesn't update the banner at all after the initial page load,
means the new solution **is useless** since there's no difference at all with the old method.

##Solution

After using and failing with the new Adsense code, I had an idea:

**Can we use CSS `transform: scale(x,y)` to zoom / scale the advert?**

In most of cases, every banner that is visible in 16:9 will be readable in 9:16, especially because it will
be displayed on high pixel density devices, which are very common these days.

<p align="center"><img src="http://i.imgur.com/8dKEaQY.png"></p>

##Warning
Its unknown whether this plugin complies with Google Adsense's usage policies, but this is currently being investigated.
So I can't recommended this solution until Google approves it's fine.

##Why should it be allowed?
Firstly, I don't see any difference between the fact that users can zoom-in/zoom-out the page
and zooming the banner by code. If it is allowed to the users to zoom a page that contains banners,
why shouldn't be allowed for us zooming a banner only?
Also, a cut in half banner is useless: mr. Google, which is better, a 1:1 sized banner
cut in half or a banner that is totally visible but 20% smaller?

##Installation
Download the files and edit <code>demo.htm</code> using your Google Adsense parameters.
