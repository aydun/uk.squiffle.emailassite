/*jslint indent: 2 */
/*global CRM, cj, ts */

(function ($) {
  $('#fromEmailAddress').find('option:not(:last-child)').remove();
  $('#fromEmailAddress').select2();
})(CRM.$, cj);
