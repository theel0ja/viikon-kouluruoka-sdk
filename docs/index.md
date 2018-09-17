---
layout: default
permalink: /
title: Viikon kouluruoka Developers site
---

<a href="https://github.com/theel0ja/viikon-kouluruoka-sdk"><img style="position: absolute; top: 0; right: 0; border: 0; width: 149px; height: 149px;" src="http://aral.github.com/fork-me-on-github-retina-ribbons/right-orange@2x.png" alt="Fork me on GitHub"></a>

Viikon kouluruoka SDK and API documentation.

## API Endpoint

### Available endpoints
<ul id="availableEndpoints"></ul>

## oEmbed Endpoint
`https://[SITE]/api/oembed/`

For example:
* `https://turku.kouluruoka.eliasojala.me/api/oembed/`
* `https://tampere.kouluruoka.eliasojala.me/api/oembed/`

## SDK Examples

### Menu

```html
<div class="kouluruoka-menu"
  data-src="https://tampere.kouluruoka.eliasojala.me/restaurants/6b6e81cd-3b72-e511-b1dd-18a9054d8b42">
  Loading <a href="https://kouluruoka.eliasojala.me">Viikon kouluruoka widget</a>.
</div>

<script async src="https://sdk.theel0ja.info/kouluruoka-v1/widgets.js" charset="utf-8"></script>
```

#### Demo

<div class="kouluruoka-menu"
  data-src="https://tampere.kouluruoka.eliasojala.me/restaurants/6b6e81cd-3b72-e511-b1dd-18a9054d8b42">
  Loading <a href="https://kouluruoka.eliasojala.me">Viikon kouluruoka widget</a>.
</div>

<script async src="https://sdk.theel0ja.info/kouluruoka-v1/widgets.js" charset="utf-8"></script>

<!-- Available endpoints -->
<script src="./script.js"></script>
<script src="https://turku.kouluruoka.eliasojala.me/api/sites?callback=listEndpoints"></script>
