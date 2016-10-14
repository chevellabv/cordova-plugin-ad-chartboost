
module.exports = {
	_loadedInterstitialAd: false,
	_loadedMoreAppsAd: false,
	_loadedRewardedVideoAd: false,
	_isShowingInterstitialAd: false,
	_isShowingMoreAppsAd: false,
	_isShowingRewardedVideoAd: false,
	//
	setLicenseKey: function(email, licenseKey) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'ChartboostPlugin',
            'setLicenseKey',			
            [email, licenseKey]
        ); 
    },
	setUp: function(appId, appSignature) {
		var self = this;	
        cordova.exec(
			function (result) {
				if (typeof result !== "string") {					
					var event = result["event"];
					var location = result["message"];	
					var error = result["error"];				
					var status = result["status"];
					if (event == "didInitialize") {
						if (self.onInitialize) {
							self.onInitialize(status);
						}
					}				
					else if (event == "onInterstitialAdPreloaded") {					
						if (self.onFullScreenAdPreloaded)
							self.onFullScreenAdPreloaded(location);			
						if (self.onInterstitialAdPreloaded)
							self.onInterstitialAdPreloaded(location);
					}
					else if (event == "onInterstitialAdLoaded") {
						self._loadedInterstitialAd = true;					
						if (self.onFullScreenAdLoaded)
							self.onFullScreenAdLoaded(location);					
						if (self.onInterstitialAdLoaded)
							self.onInterstitialAdLoaded(location);
					}
					else if (event == "onInterstitialAdShown") {
						self._loadedInterstitialAd = false;						
						self._isShowingInterstitialAd = true;
					
//cranberrygame start; deprecated					
						if (self.onFullScreenAdShown)
							self.onFullScreenAdShown(location);
//cranberrygame end						
						if (self.onInterstitialAdShown)
							self.onInterstitialAdShown(location);
					}
					else if (event == "onInterstitialAdHidden") {
						self._isShowingInterstitialAd = false;
					
//cranberrygame start; deprecated					
						 if (self.onFullScreenAdHidden)
							self.onFullScreenAdHidden(location);
//cranberrygame end							
						 if (self.onInterstitialAdHidden)
							self.onInterstitialAdHidden(location);
					}
					//
					else if (event == "onMoreAppsAdPreloaded") {
						if (self.onMoreAppsAdPreloaded)
							self.onMoreAppsAdPreloaded(location);
					}
					else if (event == "onMoreAppsAdLoaded") {
						self._loadedMoreAppsAd = true;
						
						if (self.onMoreAppsAdLoaded)
							self.onMoreAppsAdLoaded(location);
					}
					else if (event == "onMoreAppsAdShown") {
						self._loadedMoreAppsAd = false;
						self._isShowingMoreAppsAd = true;
					
						if (self.onMoreAppsAdShown)
							self.onMoreAppsAdShown(location);
					}
					else if (event == "onMoreAppsAdHidden") {
						self._isShowingMoreAppsAd = false;
					
						 if (self.onMoreAppsAdHidden)
							self.onMoreAppsAdHidden(location);
					}
					//
					else if (event == "onRewardedVideoAdPreloaded") {
						if (self.onRewardedVideoAdPreloaded)
							self.onRewardedVideoAdPreloaded(location);
					}
					else if (event == "onWillDisplayVideo") {
						if (self.onWillDisplayVideo)
							self.onWillDisplayVideo(location);
					}
					else if (event == "onRewardedVideoAdLoaded") {
						self._loadedRewardedVideoAd = true;

						if (self.onRewardedVideoAdLoaded)
							self.onRewardedVideoAdLoaded(location);
					}
					else if (event == "onRewardedVideoAdClick") {
						if (self.onRewardedVideoAdClick)
							self.onRewardedVideoAdClick(location);
					}
					else if (event == "onRewardedVideoAdClick") {
						if (self.onRewardedVideoAdClick)
							self.onRewardedVideoAdClick(location);
					}
					else if (event == 'onRewardedVideoAdFailedToLoad') {
						if (self.onRewardedVideoAdFailedToLoad)
							self.onRewardedVideoAdFailedToLoad(location, error);
					}
					else if (event == "onRewardedVideoAdShown") {
						self._loadedRewardedVideoAd = false;
						self._isShowingRewardedVideoAd = true;
					
						if (self.onRewardedVideoAdShown)
							self.onRewardedVideoAdShown(location);
					}
					else if (event == "onRewardedVideoAdHidden") {
						self._isShowingRewardedVideoAd = false;
					
						 if (self.onRewardedVideoAdHidden)
							self.onRewardedVideoAdHidden(location);
					}
					else if (event == "onRewardedVideoAdCompleted") {
						if (self.onRewardedVideoAdCompleted)
							self.onRewardedVideoAdCompleted(location);
					}	
					else if (event === "hasNoRewardVideo")	{
						if (self.onHasNoRewardVideo)
							self.onHasNoRewardVideo(location);
					}			
				}
			},
			function (error) {
				console.log('setUp failed.');
			},
            'ChartboostPlugin',
            'setUp',			
			[appId, appSignature]
        ); 
    },
//cranberrygame start; deprecated	
	preloadFullScreenAd: function(location) {
        cordova.exec(
			null,
            null,
            'ChartboostPlugin',
            'preloadInterstitialAd',
            [location]
        ); 
    },
    showFullScreenAd: function(location) {
		cordova.exec(
 			null,
            null,
            'ChartboostPlugin',
            'showInterstitialAd',
            [location]
        ); 
    },
//cranberrygame end
	preloadInterstitialAd: function(location) {
        cordova.exec(
			null,
            null,
            'ChartboostPlugin',
            'preloadInterstitialAd',
            [location]
        ); 
    },
    showInterstitialAd: function(location) {
		cordova.exec(
 			null,
            null,
            'ChartboostPlugin',
            'showInterstitialAd',
            [location]
        ); 
    },	
	preloadMoreAppsAd: function(location) {
        cordova.exec(
 			null,
            null,
            'ChartboostPlugin',
            'preloadMoreAppsAd',
            [location]
        ); 
    },
    showMoreAppsAd: function(location) {
		cordova.exec(
 			null,
            null,
            'ChartboostPlugin',
            'showMoreAppsAd',
            [location]
        ); 
    },
	preloadRewardedVideoAd: function(location) {
        cordova.exec(
			null,
            null,
            'ChartboostPlugin',
            'preloadRewardedVideoAd',
            [location]
        ); 
    },
    showRewardedVideoAd: function(location) {
		cordova.exec(
			null,
            null,
            'ChartboostPlugin',
            'showRewardedVideoAd',
            [location]
        ); 
    },
//cranberrygame start; deprecated	
	loadedFullScreenAd: function() {
		return this._loadedInterstitialAd;
	},
//cranberrygame end
	loadedInterstitialAd: function() {
		return this._loadedInterstitialAd;
	},
	loadedMoreAppsAd: function() {
		return this._loadedMoreAppsAd;
	},
	loadedRewardedVideoAd: function() {
		return this._loadedRewardedVideoAd;
	},
//cranberrygame start; deprecated
	isShowingFullScreenAd: function() {
		return this._isShowingInterstitialAd;
	},
//cranberrygame end	
	isShowingInterstitialAd: function() {
		return this._isShowingInterstitialAd;
	},
	isShowingMoreAppsAd: function() {
		return this._isShowingMoreAppsAd;
	},
	isShowingRewardedVideoAd: function() {
		return this._isShowingRewardedVideoAd;
	},	
//cranberrygame start; deprecated	
	onFullScreenAdPreloaded: null,
	onFullScreenAdLoaded: null,
	onFullScreenAdShown: null,
	onFullScreenAdHidden: null,
//cranberrygame end
	onInterstitialAdPreloaded: null,
	onInterstitialAdLoaded: null,
	onInterstitialAdShown: null,
	onInterstitialAdHidden: null,
	//
	onMoreAppsAdPreloaded: null,
	onMoreAppsAdLoaded: null,
	onMoreAppsAdShown: null,
	onMoreAppsAdHidden: null,
	//
	onRewardedVideoAdPreloaded: null,
	onRewardedVideoAdLoaded: null,
	onRewardedVideoAdShown: null,
	onRewardedVideoAdHidden: null,
	onRewardedVideoAdCompleted: null,
	onWillDisplayVideo: null,
	onHasNoRewardVideo: null,
	onInitialize: null
};
