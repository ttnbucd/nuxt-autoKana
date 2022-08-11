# nuxt-autokana
Nuxt.jsで利用しやすいように開発された、フォームに入力された値のふりがなを自動取得するパッケージ

## 利用方法
- [インストール](#インストール)
- [pluginファイル追加](#pluginファイル追加)
- [nuxt.config.js編集](#nuxt.config.js編集)
- [利用箇所で呼び出し](#利用箇所で呼び出し)

### インストール
```sh
npm i nuxt-autokana
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
利用するpage.vueやcomponent.vueで以下のように呼び出して利用

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
    // ふりがなを自動取得したい対象要素をセレクタで指定
    autoKana = this.$autokana.bind('#name');
  },

  methods: {
    getKana() {
      // getKanaValue()で別の要素に自動取得したふりがなを呼び出し
      this.kana = autoKana.getKanaValue();
    }
  }
}
```