## サービス概要
- ミステリー小説の感想が投稿できるレビュー・書評サービスです。
- 読前用・読後用のそれぞれ専用ページを設けることで、ネタバレ対策をしています。
- 未読者はネタバレを気にせずレビューを閲覧でき、既読者はおもいっきりネタバレ感想を共有できます。

## このサービスへの思い・作りたい理由
書評サービスは数多く存在しており、もちろんミステリー小説に特化したモノのすでにあります。
しかし既存のレビューサイトに**以下の二つの点**に不満がありました。

1. ネタバレを回避できない
    - 読んだことのないミステリーや気になった小説のレビューを見ると**意図せずネタバレに遭遇してしまう**ので書評サービスを利用しづらい。

2. ネタバレ感想を共有しあえる場が欲しい
    - 誰かに感想を伝えたいが、未読者に対してネタバレの配慮をしなければいけない。
    - ミステリー小説を読み終わった後にしか味わえない、あのなんとも言えない感情を文字にし、他の読者たちと共有できるプラットフォームが欲しい。(〇〇のトリックがすごかった！ など)

そこで、ネタバレに対するストレスがないミステリー小説の書評サービスを作りたいと思いました。

## ユーザー層について
1. 読んだことのないミステリー小説を探している人
2. 誰かとネタバレ感想を共有したい人

## サービスの利用イメージ
**投稿者**
- 読み終わった本のレビューを投稿することができる
    - その本の画像投稿や星評価をする
    - ネタバレを含まないレビューとネタバレを含む感想を書き分ける
    - 「気づいた伏線」を入力するフォームがある。
- 閲覧者からのコメントや「参考になった(いいね)」などのリアクションを得られる
    - コメントをもらうことで、同じ考えや違う感想を共有できる
- レビューした数(読んだ本の数)を可視化しているのでモチベーションアップに繋がる

**閲覧者**
- 気になる本の「タイトル」や「著者」でレビューを検索できる
    - ネタバレが含まれないレビューが書いてあるので安心して閲覧できる
    - レビューに「参考になった(いいね)」することができる
- 読み終わった本の「タイトル」を検索して他の人の感想を閲覧できる
    - コメントすることで、同じ考えや違う感想を共有できる
    - 他のユーザーの「気づいた伏線」を見ることで、新たな発見と再読につながる

## ユーザーの獲得について
- SNS、主にX（旧Twitter）を利用して認知してもらう
- RUNTEQコミュニティ内での認知と体験をしてもらう

## サービスの差別化ポイント・推しポイント
- **画面切り替え機能**
画面切り替え用のボタンを用意し、未読用・既読用それぞれ専用のページを表示させる。
これは意図しないネタバレを防ぐために実装する機能です。

- **気づいた伏線の入力**
既読者用のページに**気づいた伏線**を入力する欄を設置。
これにより自分では気づけなかった新たな伏線を見つけたり、それを機に一度読んだミステリーの再読を促す。

## 機能候補
### MVPリリース時
- ユーザー登録
- ログイン機能
- レビュー投稿機能
    - 未読者向け
        - タイトル
        - 本文(ネタバレなし)
        - 本の画像
        - 読了日
    - 既読者向け
        - 本文(ネタバレあり)
        - 気づいた伏線
- レビューの詳細・編集・削除機能
- 参考になった(いいね)
- 検索機能
- コメント機能
- マイページ

### 本リリース時
- ランキング機能
- オートコンプリート
- フォロー機能
- Google認証機能
- お問い合わせ
- プライバシーポリシー
- レスポンシブ化

■ 機能の実装方針予定
一般的なCRUD以外の実装予定の機能についてそれぞれどのようなイメージ(使用するAPIや)で実装する予定なのか現状考えているもので良いので教えて下さい。