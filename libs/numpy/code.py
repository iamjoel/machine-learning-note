import numpy as np

array = np.array([
  [1, 2, 3],
  [2, 3, 4]
])

# print(array)
print('基础信息')
print(array.shape) # (2,3) 行和列
print(array.size) # 6 元素个数：行*列
print('**************')

# 矩阵运算
print('矩阵运算')
print(np.arange(4) + np.arange(4)) # [1,2,3,4] + [1,2,3,4]
print(np.arange(4) - np.arange(4))
print(np.arange(4) * np.arange(4))
print(np.arange(4) ** 3) # [0 1 8 27] 各元素的n次方。这里是3次方。

a = np.array([[1,3],[0,1]])
print(np.max(a))
print(np.sum(a))
print(np.average(a)) # 平均值
print(np.median(a)) # 中位数
# 1 3
# 0 1
b = np.arange(4).reshape((2,2)) 
# 0 1 
# 2 3
print(a.dot(b)) # [[6 10] [2 3]]点积 [ [1*0 + 3*2, 1*1 + 3*3,] [ , ] ]

print('**************')
