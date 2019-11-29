const gulp = require("gulp");
const inject = require("gulp-inject");
const rename = require("gulp-rename");
const del = require("del");
const runSequence = require("run-sequence");

const css = [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
    "node_modules/material-design-icons/iconfont/material-icons.css",
    "node_modules/angular-veasy-toastr/dist/css/veasy-toastr.min.css",
    "node_modules/ui-select/dist/select.min.css",
    "node_modules/veasy-angular-components/dist/css/veasy-calendar.min.css",
    "node_modules/veasy-angular-components/dist/css/veasy-table.min.css",
    "node_modules/textangular/dist/textAngular.css",
    "node_modules/angular-bootstrap-datetimepicker/src/css/datetimepicker.css",
    "node_modules/jodit/build/jodit.min.css",
    "css/*.css"
];

const libs = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/components-jqueryui/jquery-ui.min.js",
    "node_modules/angular/angular.js",
    "node_modules/angular-sanitize/angular-sanitize.min.js",
    "node_modules/angular-route/angular-route.min.js",
    "node_modules/angular-i18n/angular-locale_pt-br.js",
    "node_modules/angular-translate/dist/angular-translate.min.js",
    "node_modules/angular-animate/angular-animate.min.js",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
    "node_modules/branas-angular-api/dist/angular-api.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/highcharts/highcharts.js",
    "node_modules/highcharts/highcharts-more.js",
    "node_modules/ui-select/dist/select.min.js",
    "node_modules/angular-veasy-toastr/dist/js/veasy-toastr-tpls.min.js",
    "node_modules/angular-veasy-toastr/dist/js/veasy-toastr.min.js",
    "node_modules/angular-ui-sortable/dist/sortable.min.js",
    "node_modules/lodash/lodash.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy-moment-format.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy-calendar-templates.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy-calendar.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy-table-templates.min.js",
    "node_modules/veasy-angular-components/dist/js/veasy-table.min.js",
    "node_modules/moment/moment.js",
    "node_modules/moment/locale/pt-br.js",
    "node_modules/moment-timezone/builds/moment-timezone-with-data.js",
    "node_modules/jodit/build/jodit.min.js",
    "node_modules/angular-veasy-toastr/dist/js/veasy-toastr.min.js",
    "node_modules/textangular/dist/textAngular-rangy.min.js",
    "node_modules/textangular/dist/textAngular-sanitize.js",
    "node_modules/textangular/dist/textAngular.js",
    "node_modules/textangular/dist/textAngularSetup.js",
    "node_modules/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js",
    "node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.js",
    "node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js",
    "node_modules/angular-date-time-input/src/dateTimeInput.js"
];

gulp.task("inject", function () {
    gulp.src("index-dev.html")
        .pipe(inject(gulp.src("js/**/*.js", {read: false}), {name: "js", relative: true}))
        .pipe(inject(gulp.src(css, { read: false }), { name: "css", relative: true }))
        .pipe(inject(gulp.src(libs, { read: false }), { name: "lib", relative: true }))
        .pipe(rename("index.html"))
        .pipe(gulp.dest(""));
});

gulp.task("cleanAll", function (cb) {
    return del(["dist/"], cb);
});

gulp.task("prod", function () {
    runSequence(["cleanAll"], ["babel"], ["uglify", "css", "copy", "html2js"], ["cleanBabel"]);
});

gulp.task("dev", function () {
    runSequence(["inject"]);
});