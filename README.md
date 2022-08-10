# nuxt-autoKana - フォームに入力された値のふりがなを自動取得するパッケージ
Nuxt.jsアプリで利用しやすいようなフォームに入力された値のふりがなを自動取得するパッケージを開発しました。

## 利用方法
- [インストール](#インストール)
- [pluginファイル追加](#pluginファイル追加)
- [nuxt.config.js編集](#nuxt.config.js編集)
- [利用箇所で呼び出し](#利用箇所で呼び出し)

### インストール
コマンドラインにてインストール

```sh
npm i nuxt-autoKana
```

### pluginファイル追加
pluginsディレクトリに任意の名前でファイル追加

```js
import * as autokana from 'nuxt-autokana';

export default ({}, inject) => {
  inject('autokana', autokana);
}
```

### nuxt.config.js編集
nuxt.config.jsを編集

```js
// 中略
plugins: [
  // 「autoKana」の箇所は作成したファイル名にすること
  { src: '~/plugins/autoKana', ssr: false },
],
// 中略
```

### 利用箇所で呼び出し
利用するpage.vueやcomponent.vueで以下のように利用できます。

```js
<template>
  <input type="text"
    id="name"
    name="name"
    v-model="name"
    @change="getKana()"
    placeholder="山田太郎"
  />
  <input type="text"
    id="kana"
    name="kana"
    v-model="kana"
    placeholder="ヤマダタロウ"
  />
</template>

let autoKana;
export default {
  data() {
    return {
      name: null,
      kana: null
    }
  },

  mounted() {
    autoKana = $nuxt.context.$autokana.bind('#name'); // セレクタで指定
  },

  methods: {
    getKana() {
      this.kana = autoKana.getKanaValue(); // getKanaValue()で呼び出し
    }
  }
}
```