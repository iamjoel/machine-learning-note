# 学习机器学习
## 什么是机器学习

## 机器学习方法的分类
机器学习的方法包括: 
* 监督学习 supervised learning（有数据和标签） :输入数据 X 能预测变量 Y。常见的场景是用来处理分类问题。 
* 非监督学习 unsupervised learning（有数据无标签）:从数据 X 中能发现什么。会将相似的数据进行聚类。
* 半监督学习 semi-supervised learning
* 强化学习 reinforcement learning（在经验中总结提升）
* 遗传算法 genetic algorithm.

上面的标签是 分类或预测值 的意思。


[相关的数学知识](math.md)： 概率论，矩阵操作等。

## 算法
* 监督算法
  * [k-邻近算法(kNN)](algorithm/kNN)。 [实现](https://github.com/mljs/knn)
  * 概率相关
    * [决策树](algorithm/decision-tree)。 
    * [朴素贝叶斯(naive bayes)](algorithm/naive-bayes): 基于概率论的分类法。 [实现](https://github.com/mljs/naive-bayes)
  * 最优化算法。Sigmoid 用来将值映射到标签。函数关系的参数调优。 
    * Logistic回归。
    * 支持向量机（Support Vector Machines, SVM）。
    * 回归
      * 线性回归。
      * 树回归。CART(分类回归树) [实现](https://github.com/mljs/decision-tree-cart)。
* 无监督学习
  * 聚类分析。 将相似的数据进行分组。
    * k 均值聚类算法。
  * 关联性分析。 购物推荐算法之类。


## 库
* 科学操作库(矩阵操作)
  * [NumPy](http://www.numpy.org/) Python
  * [numjs](https://github.com/nicolaspanel/numjs) Javascript
* [ml](https://github.com/mljs/ml) Machine learning tools in JavaScript

## 资源
* [深度强化学习导引](https://zhuanlan.zhihu.com/p/21498750)
* [有趣的机器学习](https://morvanzhou.github.io/tutorials/machine-learning/ML-intro/) 莫烦出品。[所有莫烦出品的教程](https://github.com/MorvanZhou/tutorials)。
* 《机器学习实战》书。 介绍了很多机器学习算法。
* [吴恩达 神经网络和深度学习 系列](http://study.163.com/my#/smarts)
* [神经网络与深度学习](http://wiki.jikexueyuan.com/project/neural-networks-and-deep-learning-zh-cn/)
* [100天掌握机器学习](https://github.com/Avik-Jain/100-Days-Of-ML-Code) 出到53天。
* 深度机器学习框架
  * [TensorFlow 官方文档中文版](http://wiki.jikexueyuan.com/project/tensorflow-zh/) Google 出品。 https://tensorflow.google.cn/
  * [PaddlePaddle](http://www.paddlepaddle.org/index.cn.html) 百度出品
* [机器学习教程](http://www.shareditor.com/bloglistbytag/?tagname=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%95%99%E7%A8%8B) SharEDITor
* [自己动手做聊天机器人](http://www.shareditor.com/bloglistbytag/?tagname=%E8%87%AA%E5%B7%B1%E5%8A%A8%E6%89%8B%E5%81%9A%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA) SharEDITor
* [Machine Learning with JavaScript 🚀](https://github.com/abhisheksoni27/machine-learning-with-js)

## 文章
* [专栏 | 贝叶斯学习与未来人工智能](https://mp.weixin.qq.com/s/pHAbxeYBI2q6pUHNrAt1og)
* [机器学习数学公式大全](https://mp.weixin.qq.com/s?__biz=MjM5ODIzNDQ3Mw==&mid=2649966624&idx=1&sn=48e4d8150b73c4bfd3353cd6fe3a5bb3&chksm=beca382689bdb13020acde1eeb86deb7ea777b2f19f744858ed6d41d006a5ef71bd17eadb103&scene=27#wechat_redirect)
* [yongyan 文章](http://yongyuan.name/blog/categories.html#Deep Learning)
* [Alice(极客X养成计划)](http://www.jianshu.com/p/28f02bb59fe5)

## 比赛
* [Kaggle](https://www.kaggle.com/competitions)
* [天池大数据竞赛](https://tianchi.aliyun.com/competition/gameList.htm#tab%3DActive%26pageIndex%3D1) 阿里出品。新手可以试试 [天池新人实战赛之[离线赛]](https://tianchi.aliyun.com/getStart/information.htm?spm=5176.11165320.5678.2.7a7941a8l4mEf2&raceId=231522)

## 库
