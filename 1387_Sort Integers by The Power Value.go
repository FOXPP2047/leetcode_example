func getKth(lo int, hi int, k int) int {
    type kv struct {
        Key int
        Value int
    }
    
    var sortedMapping []kv
    
    for i := lo; i <= hi; i++ {
        num := i
        count := 0
        
        for num != 1 {
            count++
            
            if num % 2 == 1 {
                num = num * 3 + 1
            } else {
                num /= 2
            }
        }
        sortedMapping = append(sortedMapping, kv{i, count})
    }
    
    sort.Slice(sortedMapping, func (a, b int) bool {
        if sortedMapping[a].Value == sortedMapping[b].Value {
            return sortedMapping[a].Key < sortedMapping[b].Key
        }
        return sortedMapping[a].Value < sortedMapping[b].Value
    })
    
    
    return sortedMapping[k - 1].Key
}