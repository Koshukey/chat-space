# README

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

