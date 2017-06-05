# laravel-elixir-rev-manifest

Generate revision manifest for [Laravel Elixir][elixir].

## Installation

```sh
npm install laravel-elixir-rev-manifest --save-dev
```

## Usage

<pre><code>
const elixir = require('laravel-elixir');

<strong>require('laravel-elixir-rev-manifest');</strong>

elixir((mix) => {
    // ...

    mix.version(['css', 'js'])<strong>.revManifest()</strong>;
});
</code></pre>

## API

```
revManifest(output, src)
```

The default `output` is `"{public}/rev-manifest.json"` which `{public}` is `elixir.config.publicPath` .

The default `src` is `"{public/build}/rev-manifest.json"` which `{public/build}` is the second parameter of `version(src, buildPath)` .

## License

[MIT license](http://opensource.org/licenses/MIT)

[elixir]: https://laravel.com/docs/5.3/elixir
