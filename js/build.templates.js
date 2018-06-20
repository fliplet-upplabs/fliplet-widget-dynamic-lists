this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.build.agenda-base"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"agenda-list-container loading\">\n  {{#ifCond social '&&' social.bookmark}}\n  <div class=\"agenda-list-controls\">\n    <div class=\"toggle-agenda\" data-mixitup-control=\"{{id}}\" data-toggle=\".bookmarked\">\n      <span class=\"fa fa-bookmark-o\"></span>\n      <span class=\"fa fa-bookmark\"></span>\n      <div class=\"agenda-list-label\">My Agenda</div>\n    </div>\n  </div>\n  {{/ifCond}}\n  <!-- Days slider -->\n  <div class=\"agenda-date-selector\">\n    <ul>\n      <!-- Day filter will be added here -->\n    </ul>\n  </div>\n\n  <!-- Agenda Cards -->\n  <div class=\"agenda-cards-wrapper\" id=\"agenda-cards-wrapper-{{id}}\">\n    <div class=\"agenda-list-holder\">\n      <!-- Cards will be rendered here -->\n    </div>\n    <!-- States messages -->\n    <div class=\"agenda-state-messages\">\n      <div class=\"loading-holder\">\n        <i class=\"fa fa-circle-o-notch fa-spin\"></i> Loading agenda...\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.agenda-cards-loop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"agenda-list-day-holder\">\n    <div id=\"contentArea-{{@index}}\" class=\"agenda-list-card-holder\">\n      {{#each this}}\n      <div class=\"agenda-list-item\" data-entry-id=\"{{id}}\">\n        <div class=\"agenda-list-item-content\">\n          <div class=\"container-fluid slide-over session-container\">\n            <div class=\"agenda-item-inner-content clearfix\">\n              <div class=\"agenda-item-info-holder\">\n                <div class=\"agenda-item-time\">{{data.[Start Time]}}</div>\n                <div class=\"agenda-item-time line\">|</div>\n                <div class=\"agenda-item-time\">{{data.[End Time]}}</div>\n              </div>\n              <div class=\"agenda-item-content-holder\">\n                <h2 class=\"agenda-item-title\">{{data.[Title]}}</h2>\n                <div class=\"agenda-item-session-location\">\n                  <p class=\"agenda-item-location\">{{{data.[Location]}}}</p>\n                  <p class=\"agenda-item-start-date-time\">{{data.[Start Time]}} - {{data.[End Time]}} / {{data.[Date]}}</p>\n                </div>\n                \n                <div class=\"agenda-item-bookmark\">\n                  <div class=\"agenda-item-bookmark-holder agenda-item-bookmark-holder-{{id}}\">\n                    <!-- Bookmark button will be here -->\n                    <div class=\"agenda-item-add-agenda\"></div>\n                  </div>\n                </div>\n                \n                <div class=\"agenda-item-description\">\n                  {{{data.[Content]}}}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"agenda-item-close-btn\"><i class=\"fa fa-times\"></i></div>\n        </div>\n      </div>\n      {{/each}}\n    </div>\n    <div class=\"agenda-item-empty-state\">Nothing bookmarked for this date</div>\n  </div>\n  {{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.agenda-dates-loop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n<li class=\"{{#if placeholder}}placeholder{{/if}}\" id=\"{{@index}}\">\n  <div class=\"week\">{{week}}</div>\n  <div class=\"day\">{{day}}</div>\n  <div class=\"month\">{{month}}</div>\n</li>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.news-feed-base"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"news-feed-list-container loading\">\n  <!-- Filter Overlay -->\n  {{#if filtersInOverlay}}\n  <div class=\"news-feed-search-filter-overlay\">\n    <div class=\"news-feed-overlay-screen\"></div>\n    <div class=\"news-feed-overlay-wrapper\">\n      <div class=\"news-feed-overlay-header\">\n        {{#ifCond searchEnabled '&&' filtersEnabled}}\n        Search &amp; Filter\n        {{else}}\n          {{#if searchEnabled}}\n          Search\n          {{/if}}\n          {{#if filtersEnabled}}\n          Filter\n          {{/if}}\n        {{/ifCond}}\n        <div class=\"news-feed-overlay-close\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n      <div class=\"news-feed-overlay-content\">\n        <div class=\"hidden-filter-controls\">\n          <div class=\"hidden-filter-controls-content\">\n            {{#if searchEnabled}}\n            <div class=\"hidden-filter-controls-search\">\n              <div class=\"search-holder\">\n                <i class=\"fa fa-search\"></i>\n                <input type=\"search\" name=\"search-feed\" class=\"form-control from-overlay\" placeholder=\"Search...\">\n              </div>\n              <div class=\"search-query-holder\">\n                <div class=\"search-query\">\n                Searching for: <span class=\"current-query-wrapper\"><span class=\"current-query\"></span><span class=\"clear-search\"><i class=\"fa fa-times\"></i></span></span>\n                </div>\n              </div>\n            </div>\n            {{/if}}\n            {{#if filtersEnabled}}\n            <div class=\"filters-header\">Filter by</div>\n            <div class=\"filter-holder\">\n              <!-- Filters here -->\n            </div>\n            {{/if}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  {{/if}}\n  <!-- End of Filter Overlay -->\n\n  <!-- Top bar with profile and search icons -->\n  {{#ifCond searchEnabled '||' filtersEnabled}}\n  <div class=\"section-top-wrapper\">\n    <div class=\"list-search-icon\">\n      {{#ifCond filtersInOverlay '!==' true}}\n      <div class=\"list-search-cancel\"><span class=\"fa fa-times\"></span></div>\n      {{/ifCond}}\n      {{#ifCond searchEnabled '&&' filtersEnabled}}\n      <i class=\"fa fa-search\"></i>\n      {{else}}\n        {{#if searchEnabled}}\n        <i class=\"fa fa-search\"></i>\n        {{/if}}\n        {{#if filtersEnabled}}\n        <i class=\"fa fa-filter\"></i>\n        {{/if}}\n      {{/ifCond}}\n    </div>\n  </div>\n  {{/ifCond}}\n  <!-- End of Top bar -->\n\n  <!-- Inline Search and Filters -->\n  {{#ifCond filtersInOverlay '!==' true}}\n    {{#ifCond searchEnabled '||' filtersEnabled}}\n    <div class=\"hidden-filter-controls\">\n      <div class=\"hidden-filter-controls-content\">\n        {{#if searchEnabled}}\n        <div class=\"hidden-filter-controls-search\">\n          <div class=\"search-holder\">\n            <i class=\"fa fa-search\"></i>\n            <input type=\"search\" name=\"search-feed\" class=\"form-control search-feed\" placeholder=\"Search...\">\n          </div>\n          <div class=\"search-query-holder\">\n            <div class=\"search-query\">\n            Searching for: <span class=\"current-query-wrapper\"><span class=\"current-query\"></span><span class=\"clear-search\"><i class=\"fa fa-times\"></i></span></span>\n            </div>\n          </div>\n        </div>\n        {{/if}}\n        {{#if filtersEnabled}}\n        <div class=\"filter-holder\">\n          <!-- Filters here -->\n        </div>\n        {{/if}}\n      </div>\n    </div>\n    {{/ifCond}}\n  {{/ifCond}}\n  <!-- End of Inline Search and Filters -->\n\n  <div class=\"news-feed-list-wrapper\" id=\"news-feed-list-wrapper-{{id}}\">\n    <!-- List items will appear here -->\n  </div>\n\n  <div class=\"loading-holder\">\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i> Loading...\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.news-feed-filters"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#if filtersInOverlay}}\n  <div class=\"panel-group\" id=\"news-feed-filters-accordion\">\n    {{#each filters}}\n      <div class=\"panel panel-default news-feed-filters-panel\">\n        <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\"#collapse-{{@index}}\">\n          <h4 class=\"panel-title\">\n            <span class=\"panel-title-text\">\n              {{[name]}}\n            </span>\n            <span class=\"fa fa-angle-down\"></span>\n          </h4>\n        </div>\n        <div id=\"collapse-{{@index}}\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n            <fieldset data-filter-group>\n              {{#each [data]}}\n              <div class=\"btn hidden-filter-controls-filter\" data-mixitup-control=\"{{../[id]}}\" data-toggle=\"{{[class]}}\">{{[name]}}</div>\n              {{/each}}\n            </fieldset>\n          </div>\n        </div>\n      </div>\n    {{/each}}\n  </div>\n{{else}}\n  {{#each filters}}\n  <div class=\"hidden-filter-controls-label\">Filter by <span>{{[name]}}</span></div>\n  <div class=\"hidden-filter-controls-filter-container\">\n    <div class=\"hidden-filter-controls-filter-wrapper\">\n      <fieldset data-filter-group>\n        {{#each [data]}}\n        <div class=\"btn hidden-filter-controls-filter\" data-mixitup-control=\"{{../[id]}}\" data-toggle=\"{{[class]}}\">{{[name]}}</div>\n        {{/each}}\n      </fieldset>\n    </div>\n  </div>\n  {{/each}}\n{{/if}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.news-feed-loop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n<div class=\"news-feed-list-item mix {{data.[classes]}}\" data-entry-id=\"{{id}}\">\n  <div class=\"news-feed-item-content\">\n    <section class=\"slide-under\">\n      <div class=\"banner\" data-height=\"20vh\" data-height-expanded=\"45vh\" style=\"height: 20vh; background-image: url('{{data.[Image]}}');\"></div>\n    </section>\n    <div class=\"container-fluid slide-over\">\n      <div class=\"news-feed-item-inner-content\" data-position=\"20vh\" data-position-expanded=\"40vh\" style=\"top: 20vh\">\n        <div class=\"news-feed-info-holder\">\n          <div class=\"news-feed-date-category\">{{data.[Date]}} / {{data.[Categories]}}</div>\n          {{#if likesEnabled}}\n          <div class=\"news-feed-like-holder news-feed-like-holder-{{id}}\">\n            <!-- Like button will be here -->\n            <!-- Like placeholder -->\n            <i class=\"fa fa-heart-o fa-lg like-placeholder\"></i>\n          </div>\n          {{/if}}\n        </div>\n        <h2 class=\"news-feed-item-title\">{{data.[Title]}}</h2>\n        <div class=\"news-feed-item-description\">\n          {{{data.[Content]}}}\n        </div>\n      </div>\n    </div>\n    <div class=\"news-feed-item-close-btn-wrapper\">\n      <div class=\"news-feed-item-close-btn\"><i class=\"fa fa-times\"></i></div>\n    </div>\n  </div>\n</div>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-base"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"small-card-list-container\">\n  <!-- Filter Overlay -->\n  {{#if filtersInOverlay}}\n  <div class=\"small-card-search-filter-overlay\">\n    <div class=\"small-card-overlay-screen\"></div>\n    <div class=\"small-card-overlay-wrapper\">\n      <div class=\"small-card-overlay-header\">\n        {{#ifCond searchEnabled '&&' filtersEnabled}}\n        Search &amp; Filter\n        {{else}}\n          {{#if searchEnabled}}\n          Search\n          {{/if}}\n          {{#if filtersEnabled}}\n          Filter\n          {{/if}}\n        {{/ifCond}}\n        <div class=\"small-card-overlay-close\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n      <div class=\"small-card-overlay-content\">\n        <div class=\"hidden-filter-controls\">\n          <div class=\"hidden-filter-controls-content\">\n            {{#if searchEnabled}}\n            <div class=\"hidden-filter-controls-search\">\n              <div class=\"search-holder\">\n                <i class=\"fa fa-search\"></i>\n                <input type=\"search\" name=\"search-feed\" class=\"form-control from-overlay\" placeholder=\"Search...\">\n              </div>\n              <div class=\"search-query-holder\">\n                <div class=\"search-query\">\n                Searching for: <span class=\"current-query-wrapper\"><span class=\"current-query\"></span><span class=\"clear-search\"><i class=\"fa fa-times\"></i></span></span>\n                </div>\n              </div>\n            </div>\n            {{/if}}\n            {{#if filtersEnabled}}\n            <div class=\"filters-header\">Filter by</div>\n            <div class=\"filter-holder\">\n              <!-- Filters here -->\n            </div>\n            {{/if}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  {{/if}}\n  <!-- End of Filter Overlay -->\n\n  <!-- Top bar with profile and search icons -->\n  <div class=\"section-top-wrapper profile-disabled\">\n    <div class=\"my-profile-container\">\n      <div class=\"my-profile-icon\"></div>\n      <div class=\"my-profile-placeholder\"></div>\n      <div class=\"my-profile-text\">My profile</div>\n    </div>\n    {{#ifCond searchEnabled '||' filtersEnabled}}\n    <div class=\"list-search-icon\">\n      {{#ifCond filtersInOverlay '!==' true}}\n      <div class=\"list-search-cancel\"><span class=\"fa fa-times\"></span></div>\n      {{/ifCond}}\n      {{#ifCond searchEnabled '&&' filtersEnabled}}\n      <i class=\"fa fa-search\"></i>\n      {{else}}\n        {{#if searchEnabled}}\n        <i class=\"fa fa-search\"></i>\n        {{/if}}\n        {{#if filtersEnabled}}\n        <i class=\"fa fa-filter\"></i>\n        {{/if}}\n      {{/ifCond}}\n    </div>\n    {{/ifCond}}\n  </div>\n  <!-- End of Top bar -->\n\n  <!-- Inline Search and Filters -->\n  {{#ifCond filtersInOverlay '!==' true}}\n    {{#ifCond searchEnabled '||' filtersEnabled}}\n    <div class=\"hidden-filter-controls\">\n      <div class=\"hidden-filter-controls-content\">\n        {{#if searchEnabled}}\n        <div class=\"hidden-filter-controls-search\">\n          <div class=\"search-holder\">\n            <i class=\"fa fa-search\"></i>\n            <input type=\"search\" name=\"search-feed\" class=\"form-control search-feed\" placeholder=\"Search...\">\n          </div>\n          <div class=\"search-query-holder\">\n            <div class=\"search-query\">\n            Searching for: <span class=\"current-query-wrapper\"><span class=\"current-query\"></span><span class=\"clear-search\"><i class=\"fa fa-times\"></i></span></span>\n            </div>\n          </div>\n        </div>\n        {{/if}}\n        {{#if filtersEnabled}}\n        <div class=\"filter-holder\">\n          <!-- Filters here -->\n        </div>\n        {{/if}}\n      </div>\n    </div>\n    {{/ifCond}}\n  {{/ifCond}}\n  <!-- End of Inline Search and Filters -->\n\n  <div class=\"small-card-list-wrapper\" id=\"small-card-list-wrapper-{{id}}\">\n      <!-- List items will appear here -->\n  </div>\n  <div class=\"loading-data\">\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i> Loading...\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"small-card-list-detail-close-btn\"><i class=\"fa fa-times\"></i></div>\n<div class=\"small-card-list-detail-content-scroll-wrapper\">\n  <div class=\"small-card-list-detail-content-wrapper\">\n    <div class=\"small-card-list-detail-name\">{{data.[First Name]}} {{data.[Last Name]}}</div>\n    <div class=\"small-card-list-detail-role\">{{data.[Title]}}</div>\n    <div class=\"small-card-list-detail-location\">{{data.[Location]}}</div>\n    {{#unless isCurrentUser}}\n    <div class=\"small-card-list-detail-buttons-wrapper\">\n      {{#if data.[Email]}}\n      <div class=\"small-card-list-detail-button\">\n        <a href=\"mailto:{{data.[Email]}}\" target=\"_blank\">\n          <div class=\"small-card-list-detail-button-image\"><span class=\"fa fa-envelope-o\"></span></div>\n          <div class=\"small-card-list-detail-button-text\">EMAIL</div>\n        </a>\n      </div>\n      {{/if}}\n      {{#if data.[Telephone]}}\n      <div class=\"small-card-list-detail-button\">\n        <a href=\"tel:{{data.[Telephone]}}\" target=\"_blank\">\n          <div class=\"small-card-list-detail-button-image\"><span class=\"fa fa-phone\"></span></div>\n          <div class=\"small-card-list-detail-button-text\">CALL</div>\n        </a>\n      </div>\n      {{/if}}\n      {{#if data.[Linkedin]}}\n      <div class=\"small-card-list-detail-button\">\n        <a href=\"{{data.[Linkedin]}}\" target=\"_blank\">\n          <div class=\"small-card-list-detail-button-image\"><span class=\"fa fa-linkedin\"></span></div>\n          <div class=\"small-card-list-detail-button-text\">LINKEDIN</div>\n        </a>\n      </div>\n      {{/if}}\n    </div>\n    {{/unless}}\n    {{#if data.[Bio]}}\n    <div class=\"small-card-list-detail-label\">Bio</div>\n    <div class=\"small-card-list-detail-body-text\">{{data.[Bio]}}</div>\n    {{/if}} {{#if data.[Sectors]}}\n    <div class=\"small-card-list-detail-label\">Sector</div>\n    <div class=\"small-card-list-detail-body-text\">{{data.[Sectors]}}</div>\n    {{/if}} {{#if data.[Expertize]}}\n    <div class=\"small-card-list-detail-label\">Areas of expertize</div>\n    <div class=\"small-card-list-detail-body-text\">{{data.[Expertize]}}</div>\n    {{/if}} {{#if data.[Telephone]}}\n    <div class=\"small-card-list-detail-label\">Telephone</div>\n    <div class=\"small-card-list-detail-body-text\">{{data.[Telephone]}}</div>\n    {{/if}} {{#if data.[Email]}}\n    <div class=\"small-card-list-detail-label\">Email</div>\n    <div class=\"small-card-list-detail-body-text\">{{data.[Email]}}</div>\n    {{/if}}\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-filters"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#if filtersInOverlay}}\n  <div class=\"panel-group\" id=\"small-card-filters-accordion\">\n    {{#each filters}}\n      <div class=\"panel panel-default small-card-filters-panel\">\n        <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\"#collapse-{{@index}}\">\n          <h4 class=\"panel-title\">\n            <span class=\"panel-title-text\">\n              {{[name]}}\n            </span>\n            <span class=\"fa fa-angle-down\"></span>\n          </h4>\n        </div>\n        <div id=\"collapse-{{@index}}\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n            <fieldset data-filter-group>\n              {{#each [data]}}\n              <div class=\"btn hidden-filter-controls-filter\" data-mixitup-control=\"{{../[id]}}\" data-toggle=\"{{[class]}}\">{{[name]}}</div>\n              {{/each}}\n            </fieldset>\n          </div>\n        </div>\n      </div>\n    {{/each}}\n  </div>\n{{else}}\n  {{#each filters}}\n  <div class=\"hidden-filter-controls-label\">Filter by <span>{{[name]}}</span></div>\n  <div class=\"hidden-filter-controls-filter-container\">\n    <div class=\"hidden-filter-controls-filter-wrapper\">\n      <fieldset data-filter-group>\n        {{#each [data]}}\n        <div class=\"btn hidden-filter-controls-filter\" data-mixitup-control=\"{{../[id]}}\" data-toggle=\"{{[class]}}\">{{[name]}}</div>\n        {{/each}}\n      </fieldset>\n    </div>\n  </div>\n  {{/each}}\n{{/if}}\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-loop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"small-card-list-item mix {{data.[classes]}}\">\n    <div class=\"small-card-list-image\">\n      <div class=\"small-card-list-detail-wrapper\" data-entry-id=\"{{id}}\">\n        <div class=\"small-card-list-detail-image-wrapper\">\n          <div class=\"small-card-list-detail-image\" style=\"background-image: url('{{data.[Image]}}')\"></div>\n          <i class=\"fa fa-user\"></i>\n        </div>\n        \n        <!-- Don't delete this -->\n        <!-- This is where the detail view will be added -->\n        {{{ data.[profileHTML] }}}\n\n      </div>\n    </div>\n    <div class=\"small-card-list-text-wrapper\">\n      <div class=\"small-card-list-name\">{{data.[First Name]}} {{data.[Last Name]}}</div>\n      <div class=\"small-card-list-role\">{{data.[Title]}}</div>\n      <div class=\"small-card-list-location\">{{data.[Location]}}</div>\n    </div>\n  </div>\n  {{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-profile-icon"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#if data.[Image]}}\n<div class=\"profile-image\" style=\"background-image: url('{{data.[Image]}}')\"></div>\n{{else}}\n<i class=\"fa fa-user\"></i>\n{{/if}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-card-user-profile"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"small-card-list-detail-wrapper\" data-entry-id=\"{{id}}\">\n  <div class=\"small-card-list-detail-image-wrapper\">\n    <div class=\"small-card-list-detail-image\" style=\"background-image: url('{{data.[Image]}}')\"></div>\n    <i class=\"fa fa-user\"></i>\n  </div>\n\n  <!-- Don't delete this -->\n  <!-- This is where the detail view will be added -->\n  {{{ data.[profileHTML] }}}\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-h-card-base"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"small-h-card-list-container\">\n  <div class=\"small-h-card-list-wrapper\" id=\"small-h-card-list-wrapper-{{id}}\">\n      <!-- List items will appear here -->\n  </div>\n  <div class=\"loading-data\">\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i> Loading...\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-h-card-detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"small-h-card-list-detail-close-btn\"><i class=\"fa fa-times\"></i></div>\n<div class=\"small-h-card-list-detail-content-scroll-wrapper\">\n  <div class=\"small-h-card-list-detail-content-wrapper\">\n    <div class=\"small-h-card-list-detail-name\">{{data.[First Name]}} {{data.[Last Name]}}</div>\n    <div class=\"small-h-card-list-detail-role\">{{data.[Title]}}</div>\n    <div class=\"small-h-card-list-detail-location\">{{data.[Location]}}</div>\n    {{#unless isCurrentUser}}\n    <div class=\"small-h-card-list-detail-buttons-wrapper\">\n      {{#if data.[Email]}}\n      <div class=\"small-h-card-list-detail-button\">\n        <a href=\"mailto:{{data.[Email]}}\" target=\"_blank\">\n          <div class=\"small-h-card-list-detail-button-image\"><span class=\"fa fa-envelope-o\"></span></div>\n          <div class=\"small-h-card-list-detail-button-text\">EMAIL</div>\n        </a>\n      </div>\n      {{/if}}\n      {{#if data.[Telephone]}}\n      <div class=\"small-h-card-list-detail-button\">\n        <a href=\"tel:{{data.[Telephone]}}\" target=\"_blank\">\n          <div class=\"small-h-card-list-detail-button-image\"><span class=\"fa fa-phone\"></span></div>\n          <div class=\"small-h-card-list-detail-button-text\">CALL</div>\n        </a>\n      </div>\n      {{/if}}\n      {{#if data.[Linkedin]}}\n      <div class=\"small-h-card-list-detail-button\">\n        <a href=\"{{data.[Linkedin]}}\" target=\"_blank\">\n          <div class=\"small-h-card-list-detail-button-image\"><span class=\"fa fa-linkedin\"></span></div>\n          <div class=\"small-h-card-list-detail-button-text\">LINKEDIN</div>\n        </a>\n      </div>\n      {{/if}}\n    </div>\n    {{/unless}}\n    {{#if data.[Bio]}}\n    <div class=\"small-h-card-list-detail-label\">Bio</div>\n    <div class=\"small-h-card-list-detail-body-text\">{{data.[Bio]}}</div>\n    {{/if}} {{#if data.[Sectors]}}\n    <div class=\"small-h-card-list-detail-label\">Sector</div>\n    <div class=\"small-h-card-list-detail-body-text\">{{data.[Sectors]}}</div>\n    {{/if}} {{#if data.[Expertize]}}\n    <div class=\"small-h-card-list-detail-label\">Areas of expertize</div>\n    <div class=\"small-h-card-list-detail-body-text\">{{data.[Expertize]}}</div>\n    {{/if}} {{#if data.[Telephone]}}\n    <div class=\"small-h-card-list-detail-label\">Telephone</div>\n    <div class=\"small-h-card-list-detail-body-text\">{{data.[Telephone]}}</div>\n    {{/if}} {{#if data.[Email]}}\n    <div class=\"small-h-card-list-detail-label\">Email</div>\n    <div class=\"small-h-card-list-detail-body-text\">{{data.[Email]}}</div>\n    {{/if}}\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.build.small-h-card-loop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"small-h-card-list-item\">\n    <div class=\"small-h-card-list-image\">\n      <div class=\"small-h-card-list-detail-wrapper\" data-entry-id=\"{{id}}\">\n        <div class=\"small-h-card-list-detail-image-wrapper\">\n          <div class=\"small-h-card-list-detail-image\" style=\"background-image: url('{{data.[Image]}}')\"></div>\n          <i class=\"fa fa-user\"></i>\n        </div>\n\n        <!-- Don't delete this -->\n        <!-- This is where the detail view will be added -->\n        {{{ data.[profileHTML] }}}\n\n      </div>\n    </div>\n    <div class=\"small-h-card-list-item-text\">{{data.[First Name]}} {{data.[Last Name]}}</div>\n  </div>\n{{/each}}";
},"useData":true});