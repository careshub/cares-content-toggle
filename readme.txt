=== CARES Content Toggle ===
Contributors: dcavins
Requires at least: 3.6
Tested up to: 4.9
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.txt

Add toggling capability for html of a specific format.

== Description ==

This plugin will apply toggle controls to content of a specific format:

<div class="toggle-container">
	<a class="toggle-trigger" href="#">Trigger text goes here</a>
	<div class="toggle-content">
		Content you want to be toggleable goes here. This content will be hidden at page load.
	</div>
</div>

If you prefer for a section to stay open on pageload,
add the class `toggle-open` to `toggle-container` like:

<div class="toggle-container toggle-open">
	<a class="toggle-trigger" href="#">Trigger text goes here</a>
	<div class="toggle-content">
		Content you want to be toggleable goes here. This content will be visible at page load.
	</div>
</div>

== Changelog ==

= 1.0.0 =
* Applies toggle capability to content with a particular structure and class names.
* Adds ARIA labeling to trigger and target content.
