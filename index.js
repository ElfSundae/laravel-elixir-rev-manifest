'use strict';

const fs = require('fs');

Elixir.extend('revManifest', function(output) {
    var paths = new Elixir.GulpPaths()
        .src(Elixir.config.get('public.versioning.buildFolder') + '/rev-manifest.json')
        .output(output || Elixir.config.publicPath + '/rev-manifest.json');

    new Elixir.Task('revManifest', function($) {
        this.recordStep('Generating manifest');

        if (!fs.existsSync(paths.src.path)) {
            Elixir.log.error(paths.src.path + ' does not exist.')
                .message('Try to call mix.version() before revManifest().')
                .break();
            return;
        }

        var manifest = JSON.parse(fs.readFileSync(paths.src.path));

        var list = {};

        for (var key in manifest) {
            var hash = manifest[key].match(/-([0-9a-f]{10})\./)[1];
            list[key] = key + '?' + hash;
        }

        fs.writeFile(paths.output.path, JSON.stringify(list, null, 2), function(err) {
            err && Elixir.log.error(err);
        });
    }, paths).watch(paths.src.path).ignore(paths.output.path);
});
