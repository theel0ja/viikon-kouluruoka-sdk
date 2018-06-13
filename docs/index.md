---
layout: default
permalink: /
title: Viikon kouluruoka Developers site
---

Viikon kouluruoka SDK documentation.


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
