/**
 * OPTIMIZELY CUSTOM REFERRER FOR GA IN REDIRECT EXPERIMENTS FRAMEWORK
 * redirectReferrerGA.js
 * Setting the correct referrer in a redirect experiment page for GA
 * See ECO-878 for context
 * 
 */

var domain = "willowcreek.com";
var cookieDomain = "." + domain;

window.getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
  };

 window.setCookie = function(c_name,value,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    document.cookie=c_name + "=" + escape(value) + ";" + c_domain + "path=/";
  };

window.checkReferrer = decodeURIComponent(getCookie("session_referrer"));
window.optlyReferrer = decodeURIComponent(getCookie("optimizelyReferrer"));

 if (typeof checkReferrer == "undefined" || document.referrer.indexOf(domain)==-1) {
    setCookie('session_referrer',document.referrer,cookieDomain);
  }
 else {
  setCookie('session_referrer',checkReferrer,cookieDomain);
 }

 window.whatReferrer = decodeURIComponent(getCookie("session_referrer"));

if(window.optlyReferrer !== undefined)
{
  ga('set','referrer',window.whatReferrer);
}
