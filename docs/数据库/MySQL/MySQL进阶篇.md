---
title: MySQL进阶篇
date: 2023-10-07
sidebarDepth: 2
# categories:
#   - 数据库
tags:
  - MySQL
author: 猫的树
publish: true
---

## 1. 存储引擎

### 1.1 MySQL 体系结构

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692786626431-0bba4e14-e205-4f90-9978-8e147cd3bc03.png#averageHue=%23e4cdb8&clientId=u83addbad-6ccd-4&from=paste&height=576&id=u2fe51840&originHeight=576&originWidth=942&originalType=binary&ratio=1&rotation=0&showTitle=false&size=172924&status=done&style=none&taskId=ue136933f-1e33-44cc-be25-331682d8f3c&title=&width=942)

1). 连接层  
 最上层是一些客户端和链接服务，包含本地 sock 通信和大多数基于客户端/服务端工具实现的类似于 TCP/IP 的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程 池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于 SSL 的安全链接。服务 器也会为安全接入的每个客户端验证它所具有的操作权限。

2). 服务层  
 第二层架构主要完成大多数的核心服务功能，如 SQL 接口，并完成缓存的查询，SQL 的分析和优化，部 分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如 过程、函数等。在该层，服务器会解 析查询并创建相应的内部解析树，并对其完成相应的优化如确定表的查询的顺序，是否利用索引等， 最后生成相应的执行操作。如果是 select 语句，服务器还会查询内部的缓存，如果缓存空间足够大， 这样在解决大量读操作的环境中能够很好的提升系统的性能。

3). 引擎层
存储引擎层， 存储引擎真正的负责了 MySQL 中数据的存储和提取，服务器通过 API 和存储引擎进行通 信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选取合适的存储引擎。数据库 中的索引是在存储引擎层实现的。

4). 存储层  
 数据存储层， 主要是将数据(如: redolog、undolog、数据、索引、二进制日志、错误日志、查询 日志、慢查询日志等)存储在文件系统之上，并完成与存储引擎的交互。

和其他数据库相比，MySQL 有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要 体现在存储引擎上，插件式的存储引擎架构，将查询处理和其他的系统任务以及数据的存储提取分离。 这种架构可以根据业务的需求和实际需要选择合适的存储引擎

### 1.2 存储引擎介绍

存储引擎就是存储数据、建立索引、更新/查询数据等技术的实现方式 。存储引擎是基于表的，而不是 基于库的，所以存储引擎也可被称为表类型。我们可以在创建表的时候，来指定选择的存储引擎，如果 没有指定将自动选择默认的存储引擎。

1). 建表时指定存储引擎

```sql
CREATE TABLE 表名(
  字段1 字段1类型 [ COMMENT 字段1注释 ] ,
  ......
  字段n 字段n类型 [COMMENT 字段n注释 ]
) ENGINE = INNODB [ COMMENT 表注释 ] ;
```

2). 查询当前数据库支持的存储引擎

```sql
show engines;
```

A. 查询建表语句 --- 默认存储引擎: InnoDB

```sql
show create table account;
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692786927898-ee228bb6-f4f7-410d-ad3c-e6d2967d8898.png#averageHue=%23faf9f8&clientId=u83addbad-6ccd-4&from=paste&height=167&id=u1050f3ca&originHeight=167&originWidth=792&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48185&status=done&style=none&taskId=u70407f22-d96d-4c22-8cb8-01c3eee57d0&title=&width=792)
创建表时，即使我们没有指定存储疫情，数据库也会自动选择默认的存储引擎。

### 1.3 存储引擎特点

#### 1.3.1 InnoDB

1). 介绍
InnoDB 是一种兼顾高可靠性和高性能的通用存储引擎，在 MySQL 5.5 之后，InnoDB 是默认的 MySQL 存储引擎。

2). 特点

- DML 操作遵循 ACID 模型，支持事务；
- 行级锁，提高并发访问性能；
- 支持外键 FOREIGN KEY 约束，保证数据的完整性和正确性；

  3). 文件
  xxx.ibd：xxx 代表的是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结 构（frm-早期的 、sdi-新版的）、数据和索引。

参数：innodb_file_per_table

```sql
show variables like 'innodb_file_per_table'
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692839372952-2da4d635-dc17-4305-83d2-04007f588f6b.png#averageHue=%23f2f0ef&clientId=uccb1f9f7-f585-4&from=paste&height=87&id=u18fb40b2&originHeight=87&originWidth=570&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21497&status=done&style=none&taskId=ue4ccb3cb-b882-47eb-a9df-6729f117c1e&title=&width=570)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692839399329-51b00f3d-f9ad-46d7-9df8-ffa0d8595a7b.png#averageHue=%23fcfbfb&clientId=uccb1f9f7-f585-4&from=paste&height=757&id=u71057368&originHeight=757&originWidth=1027&originalType=binary&ratio=1&rotation=0&showTitle=false&size=213989&status=done&style=none&taskId=u48fbbf99-e10b-4a6c-8c4f-711bfca2761&title=&width=1027)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692839413294-cae7cbc2-b782-497e-b8a0-c3a52bec070f.png#averageHue=%23111111&clientId=uccb1f9f7-f585-4&from=paste&height=498&id=u273cbb22&originHeight=498&originWidth=1197&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69841&status=done&style=none&taskId=u22ffa8d7-c2f7-4ec6-9eba-999ed18f1e4&title=&width=1197)

4). 逻辑存储结构  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692839448471-70226c61-0856-4aee-9b85-bfc8d1d25a69.png#averageHue=%2396c95c&clientId=uccb1f9f7-f585-4&from=paste&height=302&id=u724f8fb8&originHeight=302&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45574&status=done&style=none&taskId=uc35e9d59-070f-4fe2-9c3f-2b53eedd698&title=&width=728)

- 表空间 : InnoDB 存储引擎逻辑结构的最高层，ibd 文件其实就是表空间文件，在表空间中可以 包含多个 Segment 段。
- 段 : 表空间是由各个段组成的， 常见的段有数据段、索引段、回滚段等。InnoDB 中对于段的管 理，都是引擎自身完成，不需要人为对其控制，一个段中包含多个区。
- 区 : 区是表空间的单元结构，每个区的大小为 1M。 默认情况下， InnoDB 存储引擎页大小为 16K， 即一个区中一共有 64 个连续的页。
- 页 : 页是组成区的最小单元，页也是 InnoDB 存储引擎磁盘管理的最小单元，每个页的大小默 认为 16KB。为了保证页的连续性，InnoDB 存储引擎每次从磁盘申请 4-5 个区。
- 行 : InnoDB 存储引擎是面向行的，也就是说数据是按行进行存放的，在每一行中除了定义表时 所指定的字段以外，还包含两个隐藏字段(后面会详细介绍)。

#### 1.3.2 MyISAM

1). 介绍
MyISAM 是 MySQL 早期的默认存储引擎。

2). 特点
不支持事务，不支持外键 支持表锁，不支持行锁 访问速度快

3). 文件
xxx.sdi：存储表结构信息
xxx.MYD: 存储数据
xxx.MYI: 存储索引

#### 1.3.3 Memory

1). 介绍
Memory 引擎的表数据时存储在内存中的，由于受到硬件问题、或断电问题的影响，只能将这些表作为 临时表或缓存使用。

2). 特点
内存存放 hash 索引（默认）

3).文件
xxx.sdi：存储表结构信息

#### 1.3.4 区别及特点

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692839721122-df0e859f-a8f8-452d-a321-7f4b26a513fc.png#averageHue=%23fcfbfb&clientId=ue507225c-22f8-4&from=paste&height=563&id=u71307e18&originHeight=563&originWidth=737&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53652&status=done&style=none&taskId=u23493c91-efc7-4b26-ba7b-174efd6daac&title=&width=737)

> 面试题:
> InnoDB 引擎与 MyISAM 引擎的区别 ?
> ①. InnoDB 引擎, 支持事务, 而 MyISAM 不支持。
> ②. InnoDB 引擎, 支持行锁和表锁, 而 MyISAM 仅支持表锁, 不支持行锁。
> ③. InnoDB 引擎, 支持外键, 而 MyISAM 是不支持的。
>
> 主要是上述三点区别，当然也可以从索引结构、存储限制等方面，更加深入的回答，具体参 考如下官方文档：
> [https://dev.mysql.com/doc/refman/8.0/en/innodb-introduction.html]() > [https://dev.mysql.com/doc/refman/8.0/en/myisam-storage-engine.html](https://dev.mysql.com/doc/refman/8.0/en/myisam-storage-engine.html)

### 1.4 存储引擎选择

在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统，还可以根据 实际情况选择多种存储引擎进行组合。

- InnoDB: 是 Mysql 的默认存储引擎，支持事务、外键。如果应用对事务的完整性有比较高的要 求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操 作，那么 InnoDB 存储引擎是比较合适的选择。
- MyISAM ： 如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完 整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。
- MEMORY：将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。MEMORY 的缺陷就是 对表的大小有限制，太大的表无法缓存在内存中，而且无法保障数据的安全性。

## 2. 索引

### 2.1 索引概述

#### 2.1.1 介绍

索引（index）是帮助 MySQL 高效获取数据的数据结构(有序)。在数据之外，数据库系统还维护着满足 特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据， 这样就可以在这些数据结构 上实现高级查找算法，这种数据结构就是索引。

#### 2.1.2 演示

假如我们要执行的 SQL 语句为 ： select \* from user where age = 45;  
 1). 无索引情况  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692840570053-ad481769-54eb-4dde-80e7-5f4d02ac21e3.png#averageHue=%23fcf3f2&clientId=uc5f077f7-50c0-4&from=paste&height=630&id=ufa6a6a72&originHeight=630&originWidth=724&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116188&status=done&style=none&taskId=u3dc9b4e4-d911-44e0-9878-d948770dfd9&title=&width=724)

2). 有索引情况  
 如果我们针对于这张表建立了索引，假设索引结构就是二叉树，那么也就意味着，会对 age 这个字段建 立一个二叉树的索引结构。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692840658986-f54929b0-af25-4864-89f7-5a0337472bc1.png#averageHue=%23fafaf9&clientId=uc5f077f7-50c0-4&from=paste&height=544&id=u265c2c66&originHeight=544&originWidth=739&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137675&status=done&style=none&taskId=u4d272cfc-829e-42b2-9664-0bad50385ed&title=&width=739)

> 备注：
> 这里我们只是假设索引的结构是二叉树，介绍一下索引的大概原理，只是一个示意图，并 不是索引的真实结构，索引的真实结构，后面会详细介绍。

#### 2.1.3 特点

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692840712162-de95eac9-28b1-414f-96c3-633298f2b91c.png#averageHue=%23dfcab4&clientId=uc5f077f7-50c0-4&from=paste&height=263&id=ub10ea8ac&originHeight=263&originWidth=735&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61527&status=done&style=none&taskId=ub8bbab2b-7a1c-4a37-bd0c-d87aadb0e41&title=&width=735)

### 2.2 索引结构

#### 2.2.1 概述

MySQL 的索引是在存储引擎层实现的，不同的存储引擎有不同的索引结构，主要包含以下几种：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692840819682-9b10edc5-7f0d-429d-b626-fa7ea677dd10.png#averageHue=%23fbfaf9&clientId=uc5f077f7-50c0-4&from=paste&height=365&id=u506b6b4c&originHeight=365&originWidth=734&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81436&status=done&style=none&taskId=u973877fa-9404-4701-ab5c-63f0a877b92&title=&width=734)

上述是 MySQL 中所支持的所有的索引结构，接下来，我们再来看看不同的存储引擎对于索引结构的支持 情况。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692840858134-2fd95e6b-289f-44cc-839d-674bc356a353.png#averageHue=%23dccbb5&clientId=uc5f077f7-50c0-4&from=paste&height=265&id=uf4a5101d&originHeight=265&originWidth=739&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30797&status=done&style=none&taskId=u8eed6caa-5037-41c7-8d0b-20085acd075&title=&width=739)

> 注意：
> 我们平常所说的索引，如果没有特别指明，都是指 B+树结构组织的索引。

#### 2.2.2 二叉树

假如说 MySQL 的索引结构采用二叉树的数据结构，比较理想的结构如下 :
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692841012788-a7fb4d05-66ec-4f72-8785-666846798e03.png#averageHue=%23f3f3f3&clientId=uc5f077f7-50c0-4&from=paste&height=348&id=u1b04a11e&originHeight=348&originWidth=405&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27009&status=done&style=none&taskId=ubb0f7763-03dd-411c-a998-919f351cff6&title=&width=405)

如果主键是顺序插入的，则会形成一个单向链表，结构如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692841028909-5568d394-e684-4c76-983c-c65561f064c6.png#averageHue=%23fafafa&clientId=uc5f077f7-50c0-4&from=paste&height=389&id=ud5c4b858&originHeight=389&originWidth=402&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14333&status=done&style=none&taskId=uce538faf-a691-405b-bd37-adf92ae7255&title=&width=402)

所以，如果选择二叉树作为索引结构，会存在以下缺点：

- 顺序插入时，会形成一个链表，查询性能大大降低。
- 大数据量情况下，层级较深，检索速度慢。

此时大家可能会想到，我们可以选择红黑树，红黑树是一颗自平衡二叉树，那这样即使是顺序插入数 据，最终形成的数据结构也是一颗平衡的二叉树,结构如下:  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692841080407-ae8834d9-b999-4263-a6a7-fd129da13338.png#averageHue=%23f9f3f3&clientId=uc5f077f7-50c0-4&from=paste&height=361&id=u1c8d9a18&originHeight=361&originWidth=429&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18031&status=done&style=none&taskId=u03a25884-3e6d-439f-a92f-3b83b891dda&title=&width=429)
但是，即使如此，由于红黑树也是一颗二叉树，所以也会存在一个缺点：

- 大数据量情况下，层级较深，检索速度慢。

所以，在 MySQL 的索引结构中，并没有选择二叉树或者红黑树，而选择的是 B+Tree，那么什么是 B+Tree 呢？在详解 B+Tree 之前，先来介绍一个 B-Tree。

#### 2.2.3 B-Tree

B-Tree，B 树是一种多叉路衡查找树，相对于二叉树，B 树每个节点可以有多个分支，即多叉。
以一颗最大度数（max-degree）为 5(5 阶)的 b-tree 为例，那这个 B 树每个节点最多存储 4 个 key，5 个指针：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692841827385-4ab202ce-cd55-4703-ab6e-9af2f2fdd120.png#averageHue=%23efefef&clientId=uc5f077f7-50c0-4&from=paste&height=223&id=u87ce304b&originHeight=223&originWidth=725&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23712&status=done&style=none&taskId=u307f6e20-5ea7-48ea-afa5-aea967261a2&title=&width=725)

> 知识小贴士: 树的度数指的是一个节点的子节点个数。

我们可以通过一个数据结构可视化的网站来简单演示一下。
[https://www.cs.usfca.edu/~galles/visualization/BTree.html](https://www.cs.usfca.edu/~galles/visualization/BTree.html)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692842451734-e0523bad-9c1e-4b0c-97e5-f0c5a9cb2388.png#averageHue=%23d5c2a4&clientId=uc5f077f7-50c0-4&from=paste&height=355&id=u982e0c74&originHeight=355&originWidth=737&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76121&status=done&style=none&taskId=ua3d74110-77a7-496e-840a-6f8b69194be&title=&width=737)

特点：

- 5 阶的 B 树，每一个节点最多存储 4 个 key，对应 5 个指针。
- 一旦节点存储的 key 数量到达 5，就会裂变，中间元素向上分裂。
- 在 B 树中，非叶子节点和叶子节点都会存放数据。

#### 2.2.4 B+Tree

B+Tree 是 B-Tree 的变种，我们以一颗最大度数（max-degree）为 4（4 阶）的 b+tree 为例，来看一 下其结构示意图：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692842991890-87874c2e-837e-49ba-89bc-10b2b9cdee21.png#averageHue=%23f0efef&clientId=uc5f077f7-50c0-4&from=paste&height=228&id=u685e9b94&originHeight=228&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30988&status=done&style=none&taskId=u5a26fe2e-9e96-480e-87d1-bf8a32a93dc&title=&width=728)

我们可以看到，两部分：

- 绿色框框起来的部分，是索引部分，仅仅起到索引数据的作用，不存储数据。
- 红色框框起来的部分，是数据存储部分，在其叶子节点中要存储具体的数据。

我们可以通过一个数据结构可视化的网站来简单演示一下。
[https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692843418034-1cdaec93-8d0a-49ec-8542-931ad6faf283.png#averageHue=%23fcfcfb&clientId=uc5f077f7-50c0-4&from=paste&height=502&id=u03f8a758&originHeight=502&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73724&status=done&style=none&taskId=u52b83d84-80be-45b5-9e07-508bb8a8e6d&title=&width=752)

最终我们看到，B+Tree 与 B-Tree 相比，主要有以下三点区别：

- 所有的数据都会出现在叶子节点。
- 叶子节点形成一个单向链表。
- 非叶子节点仅仅起到索引数据作用，具体的数据都是在叶子节点存放的。

上述我们所看到的结构是标准的 B+Tree 的数据结构，接下来，我们再来看看 MySQL 中优化之后的 B+Tree。

MySQL 索引数据结构对经典的 B+Tree 进行了优化。在原 B+Tree 的基础上，增加一个指向相邻叶子节点 的链表指针，就形成了带有顺序指针的 B+Tree，提高区间访问的性能，利于排序。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692843608379-ba676f7b-8c7c-451b-af5a-1c78793aa8de.png#averageHue=%23f0ebe8&clientId=uc5f077f7-50c0-4&from=paste&height=240&id=u843629e9&originHeight=240&originWidth=729&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42108&status=done&style=none&taskId=u8e6d7112-6268-4ab2-938a-00bdd67b011&title=&width=729)

#### 2.2.5 Hash

MySQL 中除了支持 B+Tree 索引，还支持一种索引类型---Hash 索引。

1). 结构  
 哈希索引就是采用一定的 hash 算法，将键值换算成新的 hash 值，映射到对应的槽位上，然后存储在 hash 表中。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692843924558-06fcfed3-b5a3-4be9-80ea-f5da96d2d616.png#averageHue=%23f5eee6&clientId=uc5f077f7-50c0-4&from=paste&height=258&id=uf0fe2e9d&originHeight=258&originWidth=729&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55714&status=done&style=none&taskId=u10ad8669-425b-476d-bb27-b603e701e96&title=&width=729)

如果两个(或多个)键值，映射到一个相同的槽位上，他们就产生了 hash 冲突（也称为 hash 碰撞），可 以通过链表来解决。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692843952676-6ebe2b54-3f4d-48ef-97af-46b932d911ec.png#averageHue=%23f5eee5&clientId=uc5f077f7-50c0-4&from=paste&height=321&id=u37dfb3a0&originHeight=321&originWidth=920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81339&status=done&style=none&taskId=u9bfe6c77-6ef3-4e05-9172-2d4c8316e0a&title=&width=920)

2). 特点

- A. Hash 索引只能用于对等比较(=，in)，不支持范围查询（between，>，< ，...）
- B. 无法利用索引完成排序操作
- C. 查询效率高，通常(不存在 hash 冲突的情况)只需要一次检索就可以了，效率通常要高于 B+tree 索 引

  3). 存储引擎支持  
  在 MySQL 中，支持 hash 索引的是 Memory 存储引擎。 而 InnoDB 中具有自适应 hash 功能，hash 索引是 InnoDB 存储引擎根据 B+Tree 索引在指定条件下自动构建的。

> 思考题： 为什么 InnoDB 存储引擎选择使用 B+tree 索引结构?
>
> - A. 相对于二叉树，层级更少，搜索效率高；
> - B. 对于 B-tree，无论是叶子节点还是非叶子节点，都会保存数据，这样导致一页中存储 的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低；
> - C. 相对 Hash 索引，B+tree 支持范围匹配及排序操作；

### 2.3 索引分类

#### 2.3.1 索引分类

在 MySQL 数据库，将索引的具体类型主要分为以下几类：主键索引、唯一索引、常规索引、全文索引。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692844302567-a3750ae2-b0c7-4707-a4df-0c819301bb0a.png#averageHue=%23fbfbfb&clientId=uc5f077f7-50c0-4&from=paste&height=502&id=u1d26a3ad&originHeight=502&originWidth=922&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88499&status=done&style=none&taskId=u22168b95-2a75-4889-80b8-e2477b41fd8&title=&width=922)

#### 2.3.2 聚集索引&二级索引

而在在 InnoDB 存储引擎中，根据索引的存储形式，又可以分为以下两种：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692844634480-c4a1993d-c2c7-4390-a532-c265c755540b.png#averageHue=%23e0ccb5&clientId=uc5f077f7-50c0-4&from=paste&height=282&id=u62faa08e&originHeight=282&originWidth=914&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68814&status=done&style=none&taskId=u90283fde-33d0-4d5a-8c56-c1181df5641&title=&width=914)

聚集索引选取规则:

- 如果存在主键，主键索引就是聚集索引。
- 如果不存在主键，将使用第一个唯一（UNIQUE）索引作为聚集索引。
- 如果表没有主键，或没有合适的唯一索引，则 InnoDB 会自动生成一个 rowid 作为隐藏的聚集索 引。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692844829896-2fc92dc9-d21f-440f-8807-86f768ef2b7c.png#averageHue=%23faf7f6&clientId=u464b6352-93ed-4&from=paste&height=514&id=u4320e16a&originHeight=514&originWidth=932&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116724&status=done&style=none&taskId=u6501f342-69f1-41da-9d16-77e1f1c643b&title=&width=932)

- 聚集索引的叶子节点下挂的是这一行的数据 。
- 二级索引的叶子节点下挂的是该字段值对应的主键值。

接下来，我们来分析一下，当我们执行如下的 SQL 语句时，具体的查找过程是什么样子的。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/33678031/1692844972171-d45370ca-c2e5-49cf-b4d7-0cbe320f9338.png#averageHue=%23faf9f8&clientId=u464b6352-93ed-4&from=paste&height=750&id=u2f455802&originHeight=750&originWidth=1427&originalType=binary&ratio=1&rotation=0&showTitle=false&size=151550&status=done&style=none&taskId=u6e0f52b4-0530-479e-aced-92309fcc370&title=&width=1427)

具体过程如下:
①. 由于是根据 name 字段进行查询，所以先根据 name='Arm'到 name 字段的二级索引中进行匹配查 找。但是在二级索引中只能查找到 Arm 对应的主键值 10。  
②. 由于查询返回的数据是\*，所以此时，还需要根据主键值 10，到聚集索引中查找 10 对应的记录，最 终找到 10 对应的行 row。
③. 最终拿到这一行的数据，直接返回即可。

> 回表查询：
> 这种先到二级索引中查找数据，找到主键值，然后再到聚集索引中根据主键值，获取 数据的方式，就称之为回表查询。

> 思考题：  
> 以下两条 SQL 语句，那个执行效率高? 为什么?  
> A. select _ from user where id = 10 ;
> B. select _ from user where name = 'Arm' ;
> 备注: id 为主键，name 字段创建的有索引；  
> 解答：
> A 语句的执行性能要高于 B 语句。
> 因为 A 语句直接走聚集索引，直接返回数据。 而 B 语句需要先查询 name 字段的二级索引，然 后再查询聚集索引，也就是需要进行回表查询。

### 2.4 索引语法

1). 创建索引

```sql
create [ unique | fulltext ] index index_name on table_name (
index_col_name,... ) ;
```

2). 查看索引

```sql
show index from table_name ;
```

3). 删除索引

```sql
drop index index_name on table_name ;
```
