func topKFrequent(nums []int, k int) []int {
    numsMap := map[int] int {}
    result := [] int {}
    pList := []Pair {}
    
    for _, value := range nums {
        _, found := numsMap[value]
        
        if !found {
            numsMap[value] = 1
        } else {
            numsMap[value]++
        }
    }
    
    index := 0
    
    for key, value := range numsMap {
        pList = append(pList, Pair{key, value})
        index++    
    }
    
    sort.Slice(pList, func (a, b int) bool {
        return pList[a].Value > pList[b].Value
    })
    
    
    for i := 0; i < k; i++ {
        result = append(result, pList[i].Key)
    }
    return result
}

type Pair struct {
    Key int
    Value int
}