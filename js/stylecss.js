jQuery.noConflict();
jQuery(function()
{
// Call stylesheet init so that all stylesheet changing functions
// will work.
jQuery.stylesheetInit();
// This code loops through the stylesheets when you click the link with
// an ID of "toggler" below.
jQuery('#toggler').bind(
'click',
function(e)
{
jQuery.stylesheetToggle();
return false;
}
);
// When one of the styleswitch links is clicked then switch the stylesheet to
// the one matching the value of that links rel attribute.
jQuery('.styleswitch').bind(
'click',
function(e)
{
jQuery.stylesheetSwitch(this.getAttribute('rel'));
return false;
}
);
}
);