---
title: 利用Markdown語法編寫文章
date: 2022-03-07 00:00:00
tags:
    - markdown
    - hugo
category: Markdown
keywords:
    - markdown
    - hugo
---

## 標題大小

#代表級數

```
# 一級標題
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題
```

## 粗體

**粗體字**
```
**粗體字**
```

## 斜體

*斜體字*
```
*斜體字*
```

無法粗體和斜體一起用,也無法利用markdown語法更改顏色

## 刪除線
~~刪除線~~
```
~~刪除線~~
```

## 有序序列

內縮打四個隔空白建

1. no.1
    1. s1
    1. s2
1. no.2
1. no.3

```
1. no.1
    1. s1
    1. s2
1. no.2
1. no.3
```
## 無序序列

* no1
    * s1
    * s2
* no2
```
* no1
    * s1
    * s2
* no2
```
## 引用 

> hello
```
> hello
```

## 超連結

[外部連結](https://hxsxixn.github.io)
[內部連結](/about)
```
[外部連結](https://hxsxixn.github.io)
[內部連結](/about)
```

## 插入圖片

![](https://i.imgur.com/vaCtG59.png)
![](/images/Lightbulb.png)
```
![](https://i.imgur.com/vaCtG59.png)
![](/images/Lightbulb.png)

```
markdown語法無法更改圖片大小,可改用html語法插入圖片

## 單行程式碼
可將`程式碼`寫在內文裡面

```
可將`程式碼`寫在內文裡面
```

## 多行程式碼
將程式碼上下用```包起來,後面加程式碼名稱可上色,若不加則是預設樣式
```
print("未指定")
```

```python
print("指定為python")
```

## checkbox

- [ ]待確認
- [X]已確認
```
- [ ]待確認
- [X]已確認
```

## 表格

|AAA   |BBB   |
|------|------|
|CCC   |DDD   |

無法有合併儲存格
```
|AAA   |BBB   |
|------|------|
|CCC   |DDD   |
```