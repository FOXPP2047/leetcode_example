func moveZeroes(nums []int)  {
    if len(nums) == 0 {
		return
	}

	pos := 0
    
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[pos], nums[i] = nums[i], nums[pos]
			p++
		}
	}
}
