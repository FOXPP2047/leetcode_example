type RecentCounter struct {
    queue []int
}


func Constructor() RecentCounter {
    return RecentCounter{}
}


func (this *RecentCounter) Ping(t int) int {
    temp := *this
    temp.queue = append(temp.queue, t)
    
    for temp.queue[0] < t - 3000 {
        temp.queue = temp.queue[1:]
    }
    
    *this = temp
    return len(temp.queue)
}


/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */