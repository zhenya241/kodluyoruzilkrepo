# Insertion Sort Project

## [22,27,16,2,18,6] -> Insertion Sort

* 
```
1. [22,27,16,2,18,6]
2. [16,22,27,2,18,6]
3. [2,16,22,27,18,6]
4. [2,16,18,22,27,6]
5. [2,6,16,18,22,27]
```

* Big O Notation = `O(n²)`

* 18 ortada bulunduğu için `"Average Case"`

## [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

```
0. [7,3,5,8,2,9,4,15,6]
1. [3,7,5,8,2,9,4,15,6]
2. [3,5,7,8,2,9,4,15,6]
3. [2,3,5,7,8,9,4,15,6]
4. [2,3,4,5,7,8,9,15,6]
```

# Merge Sort Project

## [16,21,11,8,12,22] -> Merge Sort

* 
```
0. [16,21,11,8,12,22]
1. [16,21,11],[8,12,22]
2. [16,21],[11],[8,12],[22]
3. [16],[21],[11],[8],[12],[22]
4. [16,21],[11],[8,12],[22]
5. [11,16,21],[8,12,22]
6. [8,11,12,16,21,22]
```
* Big O Notation = `O(nlogn)`

# Binary Tree Project

## [7,5,1,8,3,6,0,9,4,2] dizisinin Binary-Search-Tree aşamalarını yazınız.

* Root 5 olsun. Sağ büyükler sol küçükler için olsun
```
       5
     /   \
    1     7
   / \   / \
  0   3 6   8
     / \     \
    2   4     9
        
```