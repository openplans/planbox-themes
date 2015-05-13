/* global jQuery */

var Plabox = Planbox || {};

(function($) {

    'use strict';

    // SimpleStyle (https://github.com/mapbox/simplestyle-spec) mapping code
    // from https://github.com/mapbox/mapbox.js/blob/mb-pages/src/simplestyle.js
    // ========================================================================

    var defaults = {
        stroke: '#555555',
        'stroke-width': 2,
        'stroke-opacity': 1,
        fill: '#555555',
        'fill-opacity': 0.5
    };

    var mapping = [
        ['stroke', 'color'],
        ['stroke-width', 'weight'],
        ['stroke-opacity', 'opacity'],
        ['fill', 'fillColor'],
        ['fill-opacity', 'fillOpacity']
    ];

    function fallback(a, b) {
        var c = {};
        for (var k in b) {
            if (a[k] === undefined) c[k] = b[k];
            else c[k] = a[k];
        }
        return c;
    }

    function remap(a) {
        var d = {};
        for (var i = 0; i < mapping.length; i++) {
            d[mapping[i][1]] = a[mapping[i][0]];
        }
        return d;
    }

    function style(feature) {
        return remap(fallback(feature.properties || {}, defaults));
    }

    var MapConstructor = Shareabouts.Map;
    Shareabouts.Map = function() {
        var result = MapConstructor.apply(this, arguments);
        var map = this.map;

        $.getJSON(
            'https://a.tiles.mapbox.com/v4/sdavis.lka67172/features.json?access_token=pk.eyJ1Ijoic2RhdmlzIiwiYSI6IjFlZ3ZGcUEifQ.ck_Awp6BQ1U0eDzsKR4org',
            function(data) {
                L.geoJson(data, {
                    clickable: false,
                    style: style
                }).addTo(map);
            });
        return result;
    };

    // Override the timeline widget to show more events by default.
    Planbox.TimelineController.prototype.getFutureEventsShownCount = function() {
        return 10;
    };

})(jQuery);