func combinationSum(candidates []int, target int) [][]int {
    result := [][] int{}
    temp := [] int{}
    
    sort.Slice(candidates, func(a, b int) bool {
        return candidates[a] < candidates[b]
    })
    combination(candidates, target, &result, temp)
    return result
}

func combination(candidates []int, target int, result *[][] int, temp [] int) {
    if len(candidates) == 0 {
        return
    }
    
    if candidates[0] == target {
        temp = append(temp, candidates[0])
        *result = append(*result, temp)
        return
    } else if candidates[0] < target {
        combination(candidates[1:], target, result, temp)
        newTemp := make([] int, len(temp))
        copy(newTemp, temp)
        newTemp = append(newTemp, candidates[0])
        combination(candidates, target - candidates[0], result, newTemp)
    } else {
        return
    }
}