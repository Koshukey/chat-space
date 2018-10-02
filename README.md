# README

## chatspaceとは
簡易版slackのようなもの。
ログイン機能、グループ作成機能、コメントの非同期通信、メッセージの自動更新機能を実装。

<img width="1043" alt="2018-03-15 10 43 40" src="https://user-images.githubusercontent.com/31874274/37439935-c56ec5f2-283d-11e8-93cd-c16ab660b238.png">



# DB設計

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|


### Association
- has_many :groups, through: :memebers
- has_many :messages
- has_many :members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, unique:true|

### Association
- has_many :users, through: :memebers
- has_many :messages
- has_many :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
