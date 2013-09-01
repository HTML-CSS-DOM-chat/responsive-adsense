var ResponsiveAdsense = new (function(){
  var THIS = this;
	THIS._banners = [];
	THIS._t = ['WebkitTransform','MozTransform','OTransform ','msTransform','transform'];

	THIS.resizeHandler = function(){
		var bc = THIS._banners;
		for(var x=0;x<bc.length;x++)
		{
			var banner = bc[x].getElementsByTagName("ins")[0];
			if(!banner) throw new Error('The ResponsiveAdsense container should contain the element <ins class="adsbygoogle" ...>');
			for(var y=0; y<THIS._t.length; y++)
			{
				try{
					banner.style[THIS._t[y]] = 'scaleX(' + (bc[x].clientWidth / banner.offsetWidth) + ') scaleY(' + (bc[x].clientHeight / banner.offsetHeight) + ')';
					banner.style[THIS._t[y]+'Origin'] = 'top left';
				} catch(e){};
			}
		}
	};

	return this;
})();

ResponsiveAdsense.addBanner = function(el){
	this._banners.push(el);
};

ResponsiveAdsense.addBanners = function(arrEls){
	for(var x=0;x<arrEls.length;x++)
		this.addBanner(arrEls[x]);
};
