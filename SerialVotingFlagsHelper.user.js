// ==UserScript==
// @name         Serial Voting Flags Helper
// @description  Adds links to user Mod Dashboard, Votes, IP-xref links next to username link
// @match        https://stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @author       @samliew
// ==/UserScript==

(function() {
    'use strict';

    function doPageload() {

        $('.post-user-info, .user-details').find('a[href^="/users/"]').each(function() {

            // Ignore mods
            var modFlair = $(this).next('.mod-flair');
            if(modFlair.length) return;

            // Add Votes and IP-xref links after the user link
            var uid = this.href.match(/\d+/);
            $('<div class="mod-userlinks">[ <a href="/users/account-info/'+uid+'" target="_blank">mod</a> | <a href="/admin/show-user-votes/'+uid+'" target="_blank">votes</a> | <a href="/admin/xref-user-ips/'+uid+'" target="_blank">xref</a> ]</div>')
                .insertAfter(this);
        });
    }

    function appendStyles() {

        var styles = `
<style>
.mod-userlinks {
    font-size: 0.85em;
    text-transform: uppercase;
}
</style>
`;
        $('body').append(styles);
    }

    // On page load
    doPageload();
    appendStyles();

})();