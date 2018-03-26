<?php
/**
 * @package CARES_Content_Toggle
 * @wordpress-plugin
 * Plugin Name:       CARES Content Toggle
 * Version:           1.0.0
 * Description:       A tiny plugin that adds the CSS and JS needed to toggle content in a particular format.
 * Author:            dcavins
 * Text Domain:       cares-content-toggle
 * Domain Path:       /languages
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/careshub/cares-content-toggle
 * @copyright 2018 CARES, University of Missouri
 */

namespace CARES_Content_Toggle;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/*----------------------------------------------------------------------------*
 * Public-Facing Functionality
 *----------------------------------------------------------------------------*/
function enqueue_styles_scripts() {
	// Script
	wp_enqueue_script( 'cares-content-toggle-script', plugins_url( 'assets/content-toggle.js', __FILE__ ), array( 'jquery' ), get_plugin_version(), true );

	// Styles
	wp_enqueue_style( 'cares-content-toggle-style', plugins_url( 'assets/content-toggle.css', __FILE__ ), array(), get_plugin_version(), 'all' );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_styles_scripts' );

/**
 * Helper function.
 * @TODO: Update this when you update the plugin's version above.
 *
 * @return string Current version of plugin.
 */
function get_plugin_version() {
	return '1.0.0';
}
