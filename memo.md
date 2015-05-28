# FFTT 218: ScratchX

## 1

* あいさつ
* 聞こえるか確認

## 2

* ...

## 3

* Web MIDI API が Chrome 43 で正式に対応された
* 正式対応で、これまで実験的に割と自由に使えていたものが使えなくなった
* http 越しのアクセスは reject されてるらしい？
* 設定があるけど、設定によって挙動が変わってる気配はない様子
* http://pointofviewpoint.air-nifty.com/blog/2015/04/chrome-43-betaw.html

## 4

* Web Speech Synthesis API
* 音声認識とテキストスピーチが可能
* テキストスピーチは Mac の say のようなかんじ
* http://qiita.com/ikr7/items/71406123c991a05ed8ba

## 5

* ブラウザで実際にブロックを配置して猫を動かすところまでやってみる

## 6

* 保存してある sbx ファイルを実行するか、拡張機能を読み込ませる
* ドキュメントはしたのリンクから
* すぐに試せるタンプルもある
* ここでは [Text to Speech](http://scratchx.org/?url=http://sayamindu.github.io/scratch-extensions/text_to_speech_extension.js) の簡単なデモだけ

## 7

* 自分で拡張機能を追加する時の流れの説明
* 自分の github.io ドメイン直下に [crossdomain.xml](https://github.com/LLK/scratchx/wiki#user-content-setting-up-crossdomainxml) 置く
* 拡張機能公開のためのリポジトリを作って gh-pages ブランチで公開
* スクリプトを scratchx で読み込む
    * `More Blocks` > `Load Experimental Extension` から読み込む
    * `http://scratchx.org/?url=http://scratchx.org/?url=[公開済みのURL]` に直接リクエストしても
* ドキュメント見ながらやればOK
    * 日本語だと [ScratchX 開発 はじめかた](http://mactkg.hateblo.jp/entry/2015/05/12/020537) という記事を見ればここまでのことはだいたい書いてある
 * github アカウントの話
    * クレジットカードなくても登録できて、無料で公開できるのはよい
    * [13歳以下の登録について](https://scratch.mit.edu/discuss/topic/115948/?page=1#post-1021282)

## 8

* 一通り、配置とスクリプトの中身の説明
    * https://github.com/kano-e/
        * https://github.com/kano-e/kano-e.github.io
        * https://github.com/kano-e/fftt218-scratchx/tree/gh-pages
    * http://kano-e.github.io/fftt218-scratchx/index.html
* http://scratchx.org/?url=http://kano-e.github.io/fftt218-scratchx/scratchx-hello.js
    * 中身の説明
    * `_shutdown()`
    * `_getStatus()`
    * `descriptor`
    * `Scratchextensions.register()`
* 実際に読み込んで動かしてみる
    * 猫を配置
    * 猫に hello の結果を喋らせる

## 9

* 意識低い感じでも...

## 10

* ...

