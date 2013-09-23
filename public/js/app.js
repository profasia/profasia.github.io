"use strict";

// Form validation

$.scalpel.queue['form.validate'] = function() {
  var form = $(this);
  form.validate({
    onsubmit: false
  });
  form[0].handlers.push(function(data) {
    return form.valid();
  });
};

// Sorted tables

$.scalpel.queue['table.sorted'] = function() {

  var headers = {};
  var sortList = [];

  $("thead th", this).each(function() {
    var th = $(this);
    var i = th.index();
    if (!th.hasClass("sorted"))
      headers[i] = { sorter: false };
    if (th.hasClass("asc"))
      sortList.push([i, 0]);
    else if (th.hasClass("desc"))
      sortList.push([i, 1]);
  });

  $(this).tablesorter({
    cssAsc: "desc",
    cssDesc: "asc",
    sortList: sortList,
    headers: headers
  });

};

// Textarea autosize

$.scalpel.queue['textarea.autosize'] = function() {
  $(this).autosize();
};

// Select2

$.scalpel.queue['.select2'] = function() {
  if (typeof($.fn.select2) == "undefined")
    return;
  var e = $(this);
  if (e.hasClass("s2-initialized")) return;
  e.addClass("s2-initialized");
  e.select2({
    containerCssClass: 'field ' + e.attr("class"),
    dropdownCssClass: e.attr("data-dropdown-class")
  });
};
