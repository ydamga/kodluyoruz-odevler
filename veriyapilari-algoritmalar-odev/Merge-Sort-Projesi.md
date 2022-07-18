# Merge Sort Projesi

## Sorular
```
[16,21,11,8,12,22] -> Merge Sort

1- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız. <br>
2- Big-O gösterimini yazınız.
```
## Çözümler

### 1:
```
1-     [16,21,11,8,12,22]
2-    [16,21,11] [8,12,22]
3- [16] [21,11]   [8,12] [22]
4- [16] [11,21]   [8,12] [22]
5-    [11,16,21] [8,12,22]
6-     [8,11,12,16,21,22]
```

### 2:
```
O(n*log n)
```